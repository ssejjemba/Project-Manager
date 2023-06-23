import { createAction } from "../../utils/reducer-utils";
import { MODAL_ACTION_TYPES } from "./modal-types";

export const showChosenModalAction = (payload) =>
  createAction(MODAL_ACTION_TYPES.SHOW_CHOSEN_MODAL, payload);