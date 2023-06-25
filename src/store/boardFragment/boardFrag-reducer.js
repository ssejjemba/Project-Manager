import { BOARDFRAG_ACTION_TYPES } from "./boardFrag-types";

// boardData = [
//   {
//     id: 1,
//     columnName: "Todo",
//     Tasks: [
//       {
//         taskName: "Start x",
//         subtasks: [],
//       },
//     ],
//   },
// ];
export const BOARD_FRAG_INITIAL_STATE = {
  boardData: [],
  boardName: "Platform Launch",
};

export const boardFragReducer = (
  state = BOARD_FRAG_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case BOARDFRAG_ACTION_TYPES.ADD_COLUMN:
      return { ...state, boardData: payload };
    case BOARDFRAG_ACTION_TYPES.ADD_TASK:
      return { ...state, boardData: payload };
    default:
      return state;
  }
};
