import { createAction } from "../../utils/reducer-utils";
import { BOARDFRAG_ACTION_TYPES } from "./boardFrag-types";

export const addColumnAction = (boardData) => {
  const newBoardData = boardData.concat({
    id: boardData.length + 1,
    name: "Edit Column Name",
    taskData: [],
  });
  console.log(boardData);
  return createAction(BOARDFRAG_ACTION_TYPES.ADD_COLUMN, newBoardData);
};
