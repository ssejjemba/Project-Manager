import { BOARDFRAG_ACTION_TYPES } from "./boardFrag-types";
//  ################ DATA SHAPE
// boardData = {
//   Todo:{
//     id: 1,
//     columnName: "Todo",
//     Tasks: {
//       'Start x': {
//         title: title
        // id: taskId,
        // description: description,
        // subtasks: []
      //  completedSubtasks: []
        // columnName: selectedStatus,
//       },
//     },
//   },
// };
export const BOARD_FRAG_INITIAL_STATE = {
  boardData: {},
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
    case BOARDFRAG_ACTION_TYPES.SUBMIT_ADD_TASK:
      return { ...state, boardData: payload };
    default:
      return state;
  }
};
