import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

//===========Action Types==============

/*
  READ_POST = 'post/READ_POST';
  READ_POST_SUCCESS = 'post/READ_POST_SUCCESS';
  READ_POST_FAILURE = 'post/READ_POST_FAILURE';
*/
const [
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE,
] = createRequestActionTypes('post/READ_POST');
const UNLOAD_POST = 'post/UNLOAD_POST'; //flushes data, leaving post page.

const [
  LIST_CONTENT_ITEM,
  LIST_CONTENT_ITEM_SUCCESS,
  LIST_CONTENT_ITEM_FAILURE,
] = createRequestActionTypes('post/LIST_CONTENT_ITEM');

//===========Action 생성 함수==============

export const readPost = createAction(READ_POST, id => id);
export const unloadPost = createAction(UNLOAD_POST);

export const listContentItem = createAction(LIST_CONTENT_ITEM);

//===========사가 생성==============

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);

const listContentItemSaga = createRequestSaga(
  LIST_CONTENT_ITEM,
  postsAPI.listContentItem,
);

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
  yield takeLatest(LIST_CONTENT_ITEM, listContentItemSaga);
}

//===========initial state============
const initialState = {
  post: null,
  error: null,
  contentsList: null,
  listError: null,
};

//==============reducer================
const post = handleActions(
  {
    //actionType: (state, action) => newState
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_CONTENT_ITEM_SUCCESS]: (state, { payload: contentsList }) => ({
      ...state,
      contentsList,
    }),
    [LIST_CONTENT_ITEM_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      listError,
    }),
    //flushes data, leaving post page.
    [UNLOAD_POST]: () => initialState,
  },
  initialState,
);

export default post;
