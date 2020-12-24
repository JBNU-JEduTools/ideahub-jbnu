//가장 최근에 열어본 대회의 title을 contestName 상태에 저장.
//이를 작품 등록시 taggedContest로 넘겨주기 위함.
//대회 페이지 로드시 채워지도록 함.

import { createAction, handleActions } from 'redux-actions';

//액션 타입 정의
const SET_CONTEST_NAME = 'contestName/SET_CONTEST_NAME';
const RESET_CONTEST_NAME = 'contestName/RESET_CONTEST_NAME'; //페이지를 벗어날 때 contestName 상태를 초기화해주기 위함

export const setContestName = createAction(SET_CONTEST_NAME);
//페이지를 벗어날 때 contestName 상태를 초기화해주기 위함
export const resetContestName = createAction(RESET_CONTEST_NAME);

//initial state
const initialState = {
  contestName: '',
  contestID: '',
};

//reducer
const contestName = handleActions(
  {
    [SET_CONTEST_NAME]: (state, { payload: post }) => ({
      ...state,
      contestName: post.title,
      contestID: post._id,
    }),
    [RESET_CONTEST_NAME]: () => initialState,
  },
  initialState,
);

export default contestName;
