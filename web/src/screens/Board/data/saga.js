import { put, call, takeLatest } from 'redux-saga/effects';

import {
  TILES_GET,
  TILES_GET_START,
  TILES_GET_SUCCESS,
  TILES_GET_FAIL,
} from './actionTypes';
import { tilesGet } from './firebase';

function* getTiles({ boardId }) {
  yield put({ type: TILES_GET_START });
  try {
    const result = yield call(tilesGet, boardId);
    if (result) {
      yield put({ type: TILES_GET_SUCCESS, boardId, tiles: result });
    }
  } catch(err) {
    const errors = err;
    yield put({ type: TILES_GET_FAIL, errors });
  }
}

export default [
  takeLatest(TILES_GET, getTiles)
]