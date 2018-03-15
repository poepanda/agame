import {
  TILES_GET_START,
  TILES_GET_SUCCESS,
  TILES_GET_FAIL
} from './actionTypes';

const initialState = {
  board: {},
  errors: null,
  inProgress: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TILES_GET_START: {
      return {
        ...state,
        inProgress: true
      }
    }
    case TILES_GET_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        board: {
          ...state.board,
          ...{[action.boardId]: action.tiles}
        }
      }
    }
    case TILES_GET_FAIL: {
      return {
        ...state,
        inProgress: false,
        errors: action.errors
      }
    }
    default: return state;
  }
};