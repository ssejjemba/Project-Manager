import { createAction } from "../../utils/reducer-utils";
import { BOARDFRAG_ACTION_TYPES } from "./boardFrag-types";

export const addColumnAction = (boardData) => {
  const newBoardData = {...boardData};
  newBoardData["Edit Column Name"] = {
    id: Object.keys(boardData).length + 1,
    columnName: "Edit Column Name",
    tasks: {},
  };
  console.log(newBoardData);
  return createAction(BOARDFRAG_ACTION_TYPES.ADD_COLUMN, newBoardData);
};

export const addTaskAction = (boardData, columnName, taskData) => {
  const newBoardData = {...boardData}
  const taskName = taskData.title;
  newBoardData[columnName].tasks[taskName] = taskData;
  console.log(newBoardData);
  return createAction(BOARDFRAG_ACTION_TYPES.SUBMIT_ADD_TASK, newBoardData);
};
