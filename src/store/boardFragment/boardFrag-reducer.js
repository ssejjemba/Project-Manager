export const BOARD_FRAG_INITIAL_STATE = {
  boardData: [],
};

export const boardFragReducer = (
  state = BOARD_FRAG_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
