import Router from 'koa-router';
import posts from './posts';
import auth from './auth';
import contents from './contents';
import users from './users';
import main from './main';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/contents', contents.routes());
api.use('/auth', auth.routes());
api.use('/users', users.routes());
api.use('/main', main.routes());

export default api;
