import { combineReducers } from 'redux';

import Boards from './Boards/data/reducer';
import Board from './Board/data/reducer';

export default combineReducers({
  Boards,
  Board
});