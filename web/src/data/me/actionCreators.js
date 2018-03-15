import { 
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from './actionTypes';

export const signInSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
})

export const signInStart = () => ({ type: LOGIN_START });

export const signInFail = (error) => ({ type: LOGIN_FAIL, error })

export const signOutSuccess = () => ({ type: LOGOUT_SUCCESS })