/*controlls authorization middleware functions*/

import Joi from 'joi';
import User from '../../models/user';

export const register = async ctx => {
  //request body 검증
  const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),
    password: Joi.string().required(),
    role: Joi.string(),
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password, role } = ctx.request.body;
  try {
    //username이 이미 존재하는지 검사
    const exitsts = await User.findByUsername(username);
    if (exitsts) {
      ctx.status = 409; //conflict
      return;
    }

    const user = new User({
      username,
      role,
    });
    await user.setPassword(password); //set password
    await user.save(); //save in DB

    ctx.body = user.serialize();
    //when a user signs-up, generate token
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7days
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async ctx => {
  const { username, password } = ctx.request.body;

  //if username or password is invalid(not exist)
  if (!username || !password) {
    ctx.status = 401; //unauthorized
    return;
  }

  try {
    //user dosen't exist
    const user = await User.findByUsername(username);
    if (!user) {
      ctx.status = 401;
      return;
    }

    //if entered password is not same as one stored in DB
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    //when a user signs-in, generate token.
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7days
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const check = async ctx => {
  const { user } = ctx.state;
  //로그인 중이 아닐 때
  if (!user) {
    ctx.status = 401;
    return;
  }
  //console.log(ctx.state);
  ctx.body = user;
};
export const logout = async ctx => {
  //쿠키를 지워주만한 하면 됨.
  ctx.cookies.set('access_token');
  ctx.status = 204;
};
