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
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    //기존에 아이디가 존재하면 register 수행하지 않음
    const exitsts = await User.findByUsername(username);
    if (exitsts) {
      ctx.status = 409; //conflict
      return;
    }

    const user = new User({
      username,
    });
    await user.setPassword(password); //set password
    await user.save(); //save in DB

    ctx.body = user.serialize();
    //when a user sign-up, generate token
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

    //if inputted password is not same as one stored in DB
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    //when a user sign-in, generate cookie.
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
  //로그인 상태 확인
  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401;
    return;
  }
  //console.log(ctx.state);
  ctx.body = user;
};
export const logout = async ctx => {
  //쿠키 날려버림
  ctx.cookies.set('access_token');
  ctx.status = 204;
};
