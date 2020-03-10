/*
  contents directory는 각 작품을 관리
*/

const Router = require('koa-router');
import * as contentsCtrl from './contents.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';
import checkCRUDPermission from '../../lib/checkCRUDPermission';

const contents = new Router();

//contents 라우트에 여러 라우트 설정, 각각의 함수 호출하도록 함.
contents.get('/', contentsCtrl.list);
contents.post('/', checkLoggedIn, checkCRUDPermission, contentsCtrl.write);

//id는 ctx.params에서 확인 가능
const content = new Router(); // /api/posts/:id
content.get('/', contentsCtrl.read);
content.delete(
  '/',
  checkLoggedIn,
  checkCRUDPermission,
  contentsCtrl.checkOwnContent,
  contentsCtrl.remove,
);
content.patch(
  '/',
  checkLoggedIn,
  checkCRUDPermission,
  contentsCtrl.checkOwnContent,
  contentsCtrl.update,
);

contents.use('/:id', contentsCtrl.getContentById, content.routes());

export default contents;
