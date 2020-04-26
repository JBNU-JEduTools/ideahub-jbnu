const Router = require('koa-router');
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';
import checkCRUDPermission from '../../lib/checkCRUDPermission';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.get('/recommended', postsCtrl.listRecommendedPosts);
posts.post('/', checkLoggedIn, checkCRUDPermission, postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete(
  '/',
  checkLoggedIn,
  postsCtrl.checkOwnPost,
  checkCRUDPermission,
  postsCtrl.remove,
);
post.patch(
  '/',
  checkLoggedIn,
  postsCtrl.checkOwnPost,
  checkCRUDPermission,
  postsCtrl.update,
);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
