import Router from 'koa-router';
import * as usersCtrl from './users.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';
import checkAdmin from '../../lib/checkAdmin';

const users = new Router();

users.get('/', checkLoggedIn, checkAdmin, usersCtrl.list);
users.patch('/', checkLoggedIn, checkAdmin, usersCtrl.update);
users.delete('/', checkLoggedIn, checkAdmin, usersCtrl.remove);

export default users;
