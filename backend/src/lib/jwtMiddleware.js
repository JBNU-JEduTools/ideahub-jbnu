import jwt from 'jsonwebtoken';
import { decode } from 'punycode';
import User from '../models/user';

const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };
    //Date.now() : 1970/1/1 0:0:0부터 현재까지 경과된 밀리초
    //토큰의 iat : 토큰이 언제 만들어졌는지, exp : 언제 만료되는지.
    //토큰의 유효 기간이 3.5일 미만이면 토큰 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, //7days
        httpOnly: true,
      });
    }
    return next();
  } catch (e) {
    //token decoding failed
    return next();
  }
};

export default jwtMiddleware;
