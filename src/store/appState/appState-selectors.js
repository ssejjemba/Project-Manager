import { createSelector } from "reselect";

const selectAppStateReducer = (state) => state.appState;

export const selectIsSideBarOpen = createSelector(
  [selectAppStateReducer],
  (newReducer) => newReducer.isSideBarOpen
);
