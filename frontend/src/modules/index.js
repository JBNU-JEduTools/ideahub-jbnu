import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import contentWrite, { contentWriteSaga } from './contentWrite';
import content, { contentSaga, contentCommentSaga } from './content';
import contents, { contentsSaga } from './contents';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  contentWrite,
  content,
  contents,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    contentWriteSaga(),
    contentSaga(),
    contentsSaga(),
    contentCommentSaga(),
  ]);
}

export default rootReducer;
