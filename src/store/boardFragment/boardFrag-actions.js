import { createAction } from "../../utils/reducer-utils";
import { BOARDFRAG_ACTION_TYPES } from "./boardFrag-types";

export const addColumnAction = (boardData) => {
  const newBoardData = { ...boardData };
  newBoardData["Edit Column Name"] = {
    id: Object.keys(boardData).length + 1,
    columnName: "Edit Column Name",
    tasks: {},
  };
  console.log(newBoardData);
  return createAction(BOARDFRAG_ACTION_TYPES.ADD_COLUMN, newBoardData);
};

export const addTaskAction = (boardData, columnName, taskData) => {
  const newBoardData = { ...boardData };
  const taskName = taskData.title;
  newBoardData[columnName].tasks[taskName] = taskData;
  console.log(newBoardData);
  return createAction(BOARDFRAG_ACTION_TYPES.SUBMIT_ADD_TASK, newBoardData);
};
export const editTaskProgressAction = (boardData, taskData) => {
  const newBoardData = { ...boardData };
  const taskName = taskData.title;
  const columnName = taskData.columnName;
  newBoardData[columnName].tasks[taskName] = {
    title: taskName,
    id: taskData.id,
    description: taskData.description,
    subtasks: taskData.subtasks,
    completedSubtasks: taskData.completedSubtasks,
    columnName: columnName,
  };
  console.log(newBoardData);
  return createAction(BOARDFRAG_ACTION_TYPES.SUBMIT_ADD_TASK, newBoardData);
};
