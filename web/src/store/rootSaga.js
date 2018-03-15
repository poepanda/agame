import { all } from 'redux-saga/effects';
// import meSaga from 'app/data/me/saga';

// Screens-based saga
import Boards from '../screens/Boards/data/saga';
import Tiles from '../screens/Board/data/saga';

export default function* rootSaga() {
  // yield fork(meSaga);
  yield all([
    Boards,
    Tiles
  ])
}