import { createSelector } from "reselect";

const selectModalReducer = (state) => state.modal;

export const selectIsModalVisible = createSelector(
  [selectModalReducer],
  (newReducerSlice) => newReducerSlice.isModalSeen
);

export const selectModalFormName = createSelector(
  [selectModalReducer],
  (newReducerSlice) => newReducerSlice.formName
);
