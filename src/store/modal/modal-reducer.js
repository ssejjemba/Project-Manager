import { MODAL_FORM_TYPES } from "../../components/Forms/form-types";
import { BOARDFRAG_ACTION_TYPES } from "../boardFragment/boardFrag-types";
import { MODAL_ACTION_TYPES } from "./modal-types";

const MODAL_INITIAL_STATE = {
  formName: MODAL_FORM_TYPES.EMPTY,
  isModalSeen: false,
  clickedData: {},
};

export const customModalReducer = (
  state = MODAL_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case MODAL_ACTION_TYPES.SHOW_CHOSEN_MODAL:
      return {
        ...state,
        formName: payload.formName,
        isModalSeen: payload.isModalSeen,
        clickedData: payload.clickedData,
      };
    case BOARDFRAG_ACTION_TYPES.SUBMIT_ADD_TASK:
      return { ...state, isModalSeen: false };
    default:
      return state;
  }
};
