import { createAction } from "../../utils/reducer-utils";
import { APP_STATE_TYPES } from "./appState-types";

export const toggleSideBarAction = (isSideBarOpen) =>
  createAction(APP_STATE_TYPES.TOGGLE_SIDE_BAR, !isSideBarOpen);

export const setBoardListAction = (boardList) =>
  createAction(APP_STATE_TYPES.APPEND_BOARD_LIST, boardList);

  
