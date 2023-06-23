import { APP_STATE_TYPES } from "./appState-types";

export const APP_STATE_INTIAL = {
  isSideBarOpen: true,
};

export const appStateReducer = (state = APP_STATE_INTIAL, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case APP_STATE_TYPES.TOGGLE_SIDE_BAR:
        return {...state, isSideBarOpen: payload}
    default:
      return state;
  }
};
