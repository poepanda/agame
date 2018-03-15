const localState = state => state.screens.Boards;

export const listOfBoards = state => localState(state).boards;
export const inProgress = state => localState(state).inProgress;
export const errors = state => localState(state).errors;

