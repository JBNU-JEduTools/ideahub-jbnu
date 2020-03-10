import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as contentsAPI from '../lib/api/contentPosts';
import { takeLatest } from 'redux-saga/effects';

/*
  READ_CONTENT = 'CONTENT/READ_CONTENT';
  READ_CONTENT_SUCCESS = 'CONTENT/READ_CONTENT_SUCCESS';
  READ_CONTENT_FAILURE = 'CONTENT/READ_CONTENT_FAILURE';
*/
const [
  READ_CONTENT,
  READ_CONTENT_SUCCESS,
  READ_CONTENT_FAILURE,
] = createRequestActionTypes('content/READ_CONTENT');
const UNLOAD_CONTENT = 'content/UNLOAD_CONTENT'; //flushes data, leaving CONTENT page.

export const readContent = createAction(READ_CONTENT, id => id);
export const unloadContent = createAction(UNLOAD_CONTENT);

const readContentSaga = createRequestSaga(
  READ_CONTENT,
  contentsAPI.readContent,
);

export function* contentSaga() {
  yield takeLatest(READ_CONTENT, readContentSaga);
}

//initial state
const initialState = {
  content: null,
  error: null,
};
//reducer
const content = handleActions(
  {
    //actionType: (state, action) => newState
    [READ_CONTENT_SUCCESS]: (state, { payload: content }) => ({
      ...state,
      content,
    }),
    [READ_CONTENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    //flushes data, leaving content page.
    [UNLOAD_CONTENT]: () => initialState,
  },
  initialState,
);

export default content;
