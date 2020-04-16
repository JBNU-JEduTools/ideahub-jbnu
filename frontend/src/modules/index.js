import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import contentWrite, { contentWriteSaga } from './contentWrite';
import content, { contentSaga } from './content';
import contents, { contentsSaga } from './contents';
import users, { usersSaga } from './users';
import main, { mainSaga } from './main';
import contestName from './contestName';

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
  main, //메인화면에서 전체 contents 리스트를 뽑아올 때 사용
  users, //유저 정보를 읽거나 수정, 삭제하는데 사용
  contestName, //가장 최근에 열어본 대회의 title을 contestName 상태에 저장.
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
    usersSaga(),
    mainSaga(),
  ]);
}

export default rootReducer;
