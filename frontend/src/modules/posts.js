import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');
const [
  LIST_RECOMMENDED_POSTS,
  LIST_RECOMMENDED_POSTS_SUCCESS,
  LIST_RECOMMENDED_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_RECOMMENDED_POSTS');

export const listPosts = createAction(
  LIST_POSTS,
  ({ tag, username, page }) => ({
    tag,
    username,
    page,
  }),
);
export const listRecommendedPosts = createAction(LIST_RECOMMENDED_POSTS);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
const listRecommendedPostsSaga = createRequestSaga(
  LIST_RECOMMENDED_POSTS,
  postsAPI.listRecommendedPosts,
);

export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
  yield takeLatest(LIST_RECOMMENDED_POSTS, listRecommendedPostsSaga);
}

const initialState = {
  posts: null,
  recommendedPosts: null,
  error: null,
  lastPage: 1,
};

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.headers['last-page'], 5),
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_RECOMMENDED_POSTS_SUCCESS]: (
      state,
      { payload: recommendedPosts },
    ) => ({
      ...state,
      recommendedPosts,
    }),
    [LIST_RECOMMENDED_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts;
