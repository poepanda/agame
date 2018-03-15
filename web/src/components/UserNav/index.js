import { connect } from 'react-redux';

import { authenticated } from 'app/data/me/selectors';
import { signOutSuccess } from 'app/data/me/actionCreators';

import UserNav from './UserNav';

const mapStateToProps = state => ({
  authenticated: authenticated(state)
});

const mapDispatchToProps = dispatch => ({
  signOutSuccess: () => dispatch(signOutSuccess())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserNav);