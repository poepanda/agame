import { put, call, takeLatest } from 'redux-saga/effects';

import {
  BOARDS_GET,
  BOARDS_GET_START,
  BOARDS_GET_SUCCESS,
  BOARDS_GET_FAIL,
} from './actionTypes';
import { boardsGet } from './firebase';

function* getBoards() {
  yield put({ type: BOARDS_GET_START });
  try {
    const result = yield call(boardsGet);
    if (result) {
      yield put({ type: BOARDS_GET_SUCCESS, boards: result });
    }
  } catch(err) {
    const errors = err;
    yield put({ type: BOARDS_GET_FAIL, errors });
  }
}

export default [
  takeLatest(BOARDS_GET, getBoards)
]