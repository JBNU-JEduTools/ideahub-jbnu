import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as contentPostsAPI from '../lib/api/contentPosts';
import { takeLatest } from 'redux-saga/effects';

//action type
const SET_INITIAL_STATE = 'contentwrite/SET_INITIAL_STATE'; //taggedContest를 현재 contestName으로 초기화
const INITIALIZE = 'contentwrite/INITIALIZE'; //모든 내용 초기화
const CHANGE_FIELD = 'contentwrite/CHANGE_FIELD'; //특정 key값 바꾸기
const [
  CONTENT_WRITE_POST,
  CONTENT_WRITE_POST_SUCCESS,
  CONTENT_WRITE_POST_FAILURE,
] = createRequestActionTypes('contentwrite/CONTENT_WRITE_POST');
const SET_ORIGINAL_CONTENT = 'contentwrite/SET_ORIGINAL_CONTENT'; //콘텐츠 수정버튼 클릭 시 기존 정보를 상태에 넣기 위함
const [
  UPDATE_CONTENT,
  UPDATE_CONTENT_SUCCESS,
  UPDATE_CONTENT_FAILURE,
] = createRequestActionTypes('contentwrite/UPDATE_CONTENT'); //포스트 수정

//action creating functions
export const setInitialState = createAction(SET_INITIAL_STATE);
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const contentWritePost = createAction(
  CONTENT_WRITE_POST,
  ({
    title,
    body,
    taggedContest,
    taggedContestID,
    videoURL,
    team,
    status,
    github,
  }) => ({
    title,
    body,
    taggedContest,
    taggedContestID,
    videoURL,
    team,
    status,
    github,
  }),
);
export const setOriginalContent = createAction(
  SET_ORIGINAL_CONTENT,
  (content) => content,
);
export const updateContent = createAction(
  UPDATE_CONTENT,
  ({
    id,
    title,
    body,
    taggedContest,
    taggedContestID,
    videoURL,
    team,
    status,
    github,
  }) => ({
    id,
    title,
    body,
    taggedContest,
    taggedContestID,
    videoURL,
    team,
    status,
    github,
  }),
);

//create saga
const contentWritePostSaga = createRequestSaga(
  CONTENT_WRITE_POST,
  contentPostsAPI.contentWritePost,
);
const updateContentSaga = createRequestSaga(
  UPDATE_CONTENT,
  contentPostsAPI.updateContent,
);
export function* contentWriteSaga() {
  yield takeLatest(CONTENT_WRITE_POST, contentWritePostSaga);
  yield takeLatest(UPDATE_CONTENT, updateContentSaga);
}

//initial state
const initialState = {
  title: '',
  body: '',
  taggedContest: '',
  taggedContestID: '',
  videoURL: '',
  team: '',
  status: '',
  github: '',
  content: null,
  contentError: null,
  originalContentId: null,
};

//reducer
const contentWrite = handleActions(
  {
    [SET_INITIAL_STATE]: (state, { payload: contestName }) => ({
      ...initialState,
      taggedContest: contestName.contestName,
      taggedContestID: contestName.contestID,
    }),
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [CONTENT_WRITE_POST]: (state) => ({
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
    [SET_ORIGINAL_CONTENT]: (state, { payload: content }) => ({
      ...state,
      title: content.title,
      body: content.body,
      taggedContest: content.taggedContest,
      taggedContestID: content.taggedContestID,
      videoURL: content.videoURL,
      team: content.team,
      status: content.status,
      github: content.github,
      stars: content.stars,
      originalContentId: content._id,
    }),
    [UPDATE_CONTENT_SUCCESS]: (state, { payload: content }) => ({
      ...state,
      content,
    }),
    [UPDATE_CONTENT_FAILURE]: (state, { payload: contentError }) => ({
      ...state,
      contentError,
    }),
  },
  initialState,
);

export default contentWrite;
