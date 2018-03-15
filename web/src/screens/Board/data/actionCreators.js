import { TILES_GET } from './actionTypes';

export const getTiles = (boardId) => ({
  type: TILES_GET,
  boardId
})