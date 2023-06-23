import { createSelector } from "reselect";

const selectBoardFragReducer = (state) => state.boardFragment;

export const selectBoardData = 
  createSelector(
    [selectBoardFragReducer],
    (newReducerSlice) => newReducerSlice.boardData
  );
