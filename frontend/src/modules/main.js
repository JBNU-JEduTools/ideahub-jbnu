import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as mainAPI from '../lib/api/main';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_CONTENTS_BY_STAR,
  LIST_CONTENTS_BY_STAR_SUCCESS,
  LIST_CONTENTS_BY_STAR_FAILURE,
] = createRequestActionTypes('main/LIST_CONTENTS_BY_STAR');
const [
  LIST_CONTENTS_BY_PRIZE,
  LIST_CONTENTS_BY_PRIZE_SUCCESS,
  LIST_CONTENTS_BY_PRIZE_FAILURE,
] = createRequestActionTypes('main/LIST_CONTENTS_BY_PRIZE');

export const listContentsByStar = createAction(LIST_CONTENTS_BY_STAR);
export const listContentsByPrize = createAction(LIST_CONTENTS_BY_PRIZE);

const listContentsByStarSaga = createRequestSaga(
  LIST_CONTENTS_BY_STAR,
  mainAPI.listContentsByStar,
);
const listContentsByPrizeSaga = createRequestSaga(
  LIST_CONTENTS_BY_PRIZE,
  mainAPI.listContentsByPrize,
);

export function* mainSaga() {
  yield takeLatest(LIST_CONTENTS_BY_STAR, listContentsByStarSaga);
  yield takeLatest(LIST_CONTENTS_BY_PRIZE, listContentsByPrizeSaga);
}

const initialState = {
  contentsByStar: null,
  contentsByPrize: null,
  error: null,
};

const main = handleActions(
  {
    [LIST_CONTENTS_BY_STAR_SUCCESS]: (state, { payload: contentsByStar }) => ({
      ...state,
      contentsByStar,
    }),
    [LIST_CONTENTS_BY_STAR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_CONTENTS_BY_PRIZE_SUCCESS]: (
      state,
      { payload: contentsByPrize },
    ) => ({
      ...state,
      contentsByPrize,
    }),
    [LIST_CONTENTS_BY_PRIZE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default main;
