import { connect } from 'react-redux';

import Boards from './Boards';

import { listOfBoards, inProgress, errors } from './data/selectors';
import { getBoards } from './data/actionCreators';

const mapStateToProps = state => ({
  listOfBoards: listOfBoards(state),
  inProgress: inProgress(state),
  errors: errors(state)
});

const mapDispatchToProps = dispatch => ({
  getBoards: () => dispatch(getBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boards);