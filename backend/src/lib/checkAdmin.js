//사용자가 admin인지 확인하는 미들웨어
export const checkAdmin = (ctx, next) => {
  const { user } = ctx.state; //await User.find(id)

  if (user.role === 'admin') {
    return next();
  } else {
    ctx.status = 403; //forbiden
    console.log('Permission denied. checkout checkAdmin.js');
  }
};

export default checkAdmin;
