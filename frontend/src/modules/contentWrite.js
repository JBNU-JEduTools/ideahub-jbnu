import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as contentPostsAPI from '../lib/api/contentPosts';
import { takeLatest } from 'redux-saga/effects';

//action type
const INITIALIZE = 'contentwrite/INITIALIZE'; //모든 내용 초기화
const CHANGE_FIELD = 'contentwrite/CHANGE_FIELD'; //특정 key값 바꾸기
const [
  CONTENT_WRITE_POST,
  CONTENT_WRITE_POST_SUCCESS,
  CONTENT_WRITE_POST_FAILURE,
] = createRequestActionTypes('contentwrite/CONTENT_WRITE_POST');

//action creating functions
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const contentWritePost = createAction(
  CONTENT_WRITE_POST,
  ({ title, body, taggedContest, videoURL, team, status }) => ({
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
  }),
);

//create saga
const contentWritePostSaga = createRequestSaga(
  CONTENT_WRITE_POST,
  contentPostsAPI.contentWritePost,
);
export function* contentWriteSaga() {
  yield takeLatest(CONTENT_WRITE_POST, contentWritePostSaga);
}

//initial state
const initialState = {
  title: '',
  body: '',
  taggedContest: '',
  videoURL: '',
  team: '',
  status: '',
  comments: [],
  content: null,
  contentError: null,
};

//reducer
const contentWrite = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [CONTENT_WRITE_POST]: state => ({
      ...state,
      content: null,
      contentError: null,
    }),
    [CONTENT_WRITE_POST_SUCCESS]: (state, { payload: content }) => ({
      ...state,
      content,
    }),
    [CONTENT_WRITE_POST_FAILURE]: (state, { payload: contentError }) => ({
      ...state,
      contentError,
    }),
  },
  initialState,
);

export default contentWrite;
