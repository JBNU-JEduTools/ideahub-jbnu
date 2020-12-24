const Router = require('koa-router');
import * as mainCtrl from './main.ctrl';

const main = new Router();

main.get('/star', mainCtrl.listByStar);
main.get('/prize', mainCtrl.listByPrize);

export default main;
