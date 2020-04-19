import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as contentsAPI from '../lib/api/contentPosts';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_CONTENTS,
  LIST_CONTENTS_SUCCESS,
  LIST_CONTENTS_FAILURE,
] = createRequestActionTypes('contents/LIST_CONTENTS');

export const listContents = createAction(
  LIST_CONTENTS,
  ({ taggedContestID, page }) => ({
    taggedContestID,
    page,
  }),
);

const listContentsSaga = createRequestSaga(
  LIST_CONTENTS,
  contentsAPI.listContents,
);

export function* contentsSaga() {
  yield takeLatest(LIST_CONTENTS, listContentsSaga);
}

const initialState = {
  contents: null,
  error: null,
};

const contents = handleActions(
  {
    [LIST_CONTENTS_SUCCESS]: (state, { payload: contents }) => ({
      ...state,
      contents,
    }),
    [LIST_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default contents;
