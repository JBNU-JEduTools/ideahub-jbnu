/* define external middlewares.
lib directory stores middlewares that could be used in many routes*/

//로그인 상태가 아니면 401HTTP status 반환
//로그인 상태라면 다음 미들웨어들을 실행.
const checkLoggedIn = (ctx, next) => {
  //logged in === ctx.state.user does not empty
  if (!ctx.state.user) {
    ctx.status = 401;
    return;
  }
  return next();
};

export default checkLoggedIn;
