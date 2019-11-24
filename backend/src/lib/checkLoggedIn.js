/* define external middlewares.
lib directory stores middlewares that could be used in many routes*/

const checkLoggedIn = (ctx, next) => {
  //logged in === ctx.tate.user does not empty
  if (!ctx.state.user) {
    ctx.status = 401;
    return;
  }
  return next();
};

export default checkLoggedIn;
