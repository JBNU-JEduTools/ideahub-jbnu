/*
  contents directory는 각 작품을 관리
*/

const Router = require('koa-router');
import * as contentsCtrl from './contents.ctrl';

const contents = new Router();

//contents 라우트에 여러 라우트 설정, 각각의 함수 호출하도록 함.
contents.get('/', contentsCtrl.list);
contents.post('/', contentsCtrl.write);
//id는 ctx.params에서 확인 가능
contents.get('/:id', contentsCtrl.checkObjectId, contentsCtrl.read);
contents.delete('/:id', contentsCtrl.checkObjectId, contentsCtrl.remove);
contents.patch('/:id', contentsCtrl.checkObjectId, contentsCtrl.update);
//contents.patch('/:id', contentsCtrl.checkObjectId, contentsCtrl.updateComment);

export default contents;
