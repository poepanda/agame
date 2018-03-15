import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import { authenticated, inProgress } from 'app/data/me/selectors';

const mapStateToProps = state => ({
  authenticated: authenticated(state),
  inProgress: inProgress(state),
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);