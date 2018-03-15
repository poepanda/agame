import {
  BOARDS_GET_START,
  BOARDS_GET_SUCCESS,
  BOARDS_GET_FAIL
} from './actionTypes';

const initialState = {
  boards: null,
  errors: null,
  inProgress: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case BOARDS_GET_START: {
      return {
        ...state,
        inProgress: true
      }
    }
    case BOARDS_GET_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        boards: action.boards
      }
    }
    case BOARDS_GET_FAIL: {
      return {
        ...state,
        inProgress: false,
        errors: action.errors
      }
    }
    default: return state;
  }
};