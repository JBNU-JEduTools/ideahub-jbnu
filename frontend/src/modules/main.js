import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as mainAPI from '../lib/api/main';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_ALL_CONTENTS,
  LIST_ALL_CONTENTS_SUCCESS,
  LIST_ALL_CONTENTS_FAILURE,
] = createRequestActionTypes('main/LIST_ALL_CONTENTS');

export const listAllContents = createAction(LIST_ALL_CONTENTS);

const listAllContentsSaga = createRequestSaga(
  LIST_ALL_CONTENTS,
  mainAPI.listAllContents,
);

export function* mainSaga() {
  yield takeLatest(LIST_ALL_CONTENTS, listAllContentsSaga);
}

const initialState = {
  allContents: null,
  error: null,
};

const main = handleActions(
  {
    [LIST_ALL_CONTENTS_SUCCESS]: (state, { payload: allContents }) => ({
      ...state,
      allContents,
    }),
    [LIST_ALL_CONTENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default main;
