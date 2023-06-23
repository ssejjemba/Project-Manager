import { MODAL_ACTION_TYPES } from "./modal-types";

const MODAL_INITIAL_STATE = {
  formName: '',
  isModalSeen: false,
};

export const customModalReducer = (
  state = MODAL_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case MODAL_ACTION_TYPES.SHOW_CHOSEN_MODAL:
      return { ...state, formName: payload.formName, isModalSeen: payload.isModalSeen };
    default:
      return state;
  }
};
