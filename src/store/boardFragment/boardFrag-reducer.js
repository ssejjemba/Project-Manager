import { BOARDFRAG_ACTION_TYPES } from "./boardFrag-types";

export const BOARD_FRAG_INITIAL_STATE = {
  boardData: [],
  boardName: 'Platform Launch'
};

export const boardFragReducer = (
  state = BOARD_FRAG_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case BOARDFRAG_ACTION_TYPES.ADD_COLUMN:
      return {...state, boardData: payload}
    default:
      return state;
  }
};
