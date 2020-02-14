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
//작성할 댓글이 수정되면 commentToAdd를 변경하는 액션
const CHANGE_COMMENT = 'content/CHANGE_COMMENT';
//댓글 작성 버튼 클릭시 수행할 액션의 타입
const SUBMIT_COMMENT = 'content/SUBMIT_COMMENT';

export const readContent = createAction(READ_CONTENT, id => id);
export const unloadContent = createAction(UNLOAD_CONTENT);
export const changeComment = createAction(CHANGE_COMMENT);
export const submitComment = createAction(SUBMIT_COMMENT);

const readContentSaga = createRequestSaga(
  READ_CONTENT,
  contentsAPI.readContent,
);
const submitCommentSaga = createRequestSaga(
  SUBMIT_COMMENT,
  contentsAPI.addComment,
);
export function* contentSaga() {
  yield takeLatest(READ_CONTENT, readContentSaga);
}
export function* contentCommentSaga() {
  yield takeLatest(SUBMIT_COMMENT, submitCommentSaga);
}

//initial state
const initialState = {
  content: null,
  error: null,
  commentBody: '',
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
    //특정 key값을 업데이트.
    [CHANGE_COMMENT]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    //댓글 작성 버튼 클릭시.
    [SUBMIT_COMMENT]: (
      state,
      { payload: { content, commentUsername, commentBody } },
    ) => ({
      ...state,
      content: {
        ...content,
        comments: [
          ...content.comments,
          { username: commentUsername, commentBody: commentBody },
        ],
      },
    }),
  },
  initialState,
);

export default content;
