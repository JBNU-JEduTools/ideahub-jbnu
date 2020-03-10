import jwt from 'jsonwebtoken';
import User from '../models/user';

const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');
  //쿠키에 저장된 토큰이 없는 경우
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //쿠키에 저장된 사용자 정보를 ctx.state.user에 저장.
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
      role: decoded.role,
    };

    //해석된(decoded) 토큰의 exp 값은 토큰의 만료 정보를 나타냄
    //토큰의 유효기간이 3.5일 미만일 경우 새로운 토큰을 재발급.
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
