import { connect } from 'react-redux';

import Board from './Board';

import { listOfTiles, inProgress, errors } from './data/selectors';
import { getTiles } from './data/actionCreators';

const mapStateToProps = state => ({
  listOfTiles: (boardId) => listOfTiles(state, boardId),
  inProgress: inProgress(state),
  errors: errors(state)
});

const mapDispatchToProps = dispatch => ({
  getTiles: (boardId) => dispatch(getTiles(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);