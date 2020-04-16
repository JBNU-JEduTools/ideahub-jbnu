const Router = require('koa-router');
import * as mainCtrl from './main.ctrl';

const main = new Router();

main.get('/', mainCtrl.fullList);

export default main;
