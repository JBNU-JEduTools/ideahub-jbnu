import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

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

export const readPost = createAction(READ_POST, id => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}
//initial state
const initialState = {
  post: null,
  error: null,
};
//reducer
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
    //flushes data, leaving post page.
    [UNLOAD_POST]: () => initialState,
  },
  initialState,
);

export default post;
