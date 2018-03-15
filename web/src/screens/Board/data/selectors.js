const localState = state => state.screens.Board;

export const listOfTiles = (state, boardId) => {
  return localState(state).board[boardId] ? localState(state).board[boardId] : [];
}
export const inProgress = state => localState(state).inProgress;
export const errors = state => localState(state).errors;
