//사용자가 (admin) 또는 (글 작성, 수정, 삭제가 허용된 writer)인지 확인하는 미들웨어
export const checkCRUDPermission = (ctx, next) => {
  const { user } = ctx.state; //await User.find(id)

  if (user.role === 'admin' || user.role === 'writer') {
    return next();
  } else {
    ctx.status = 403; //forbiden
    console.log('CRUD Permission denied. checkout checkCRUDPermission.js');
  }
};

export default checkCRUDPermission;
