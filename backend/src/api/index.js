import Router from 'koa-router';
import posts from './posts';
import auth from './auth';
import contents from './contents';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/contents', contents.routes());
api.use('/auth', auth.routes());

//����� ��ü�� �ܺη� export
export default api;
