const localState = state => state.data.me;

export const authenticated = state => !!localState(state).user;
export const getUser = state => localState(state).user;
export const inProgress = state => localState(state).inProgress;
export const errors = state => localState(state).errors;