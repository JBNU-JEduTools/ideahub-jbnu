//리덕스에 사용될 액션 타입, 액션 생성함수, 리듀서 등을 정의.
//user 정보를 얻거나 수정.

import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as usersAPI from '../lib/api/users';
import { takeLatest } from 'redux-saga/effects';

//==============액션 타입 정의=============
const [
  LIST_USERS,
  LIST_USERS_SUCCESS,
  LIST_USERS_FAILURE,
] = createRequestActionTypes('users/LIST_USERS');
//유저 정보를 변경하는 액션
const UPDATE_USERS = 'users/UPDATE_USERS';

//==========액션 생성 함수===============
export const listUsers = createAction(LIST_USERS);
export const updateUsers = createAction(UPDATE_USERS);

//=========리덕스 사가 생성==============

const listUsersSaga = createRequestSaga(LIST_USERS, usersAPI.listUsers);
const updateUsersSaga = createRequestSaga(UPDATE_USERS, usersAPI.updateUsers);
export function* usersSaga() {
  yield takeLatest(LIST_USERS, listUsersSaga);
  yield takeLatest(UPDATE_USERS, updateUsersSaga);
}

//=========initial state (초기 상태) 정의===========
const initialSate = {
  users: null,
  error: null,
  userItem: null, //administer 페이지에서, 유저 role 변경 시 변경 될 유저 정보와 새로운 role을 담음.
};

//=========리듀서 정의(combine reducers와 같은 동작)============
//************유저 상태를 변경하는 리듀서 필요.*******************
const users = handleActions(
  {
    [LIST_USERS_SUCCESS]: (state, { payload: users }) => ({
      ...state,
      users,
    }),
    [LIST_USERS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    //확인
    [UPDATE_USERS]: (state, { payload: userItem }) => ({
      ...state,
      userItem,
    }),
  },
  initialSate,
);

export default users;
