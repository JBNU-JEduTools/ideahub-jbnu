const Router = require('koa-router');
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

//posts����Ϳ� �� ��ο� �ش��ϴ� �̵���� ���
posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

//posts�� /:id��ο� post���Ʈ ���
posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
