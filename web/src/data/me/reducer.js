import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from './actionTypes';
import { REHYDRATE_COMPLETE } from 'app/store/superActionTypes';

const initialState = {
  user: null,
  inProgress: true,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START: {
      return {
        ...state,
        inProgress: true
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user
      }
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.error
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: null
      }
    }
    case REHYDRATE_COMPLETE: {
      return {
        ...state,
        inProgress: false,
      }
    }
    default: return state;
  }
};