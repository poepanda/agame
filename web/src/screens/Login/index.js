import { connect } from 'react-redux';

import { getUser, authenticated } from 'app/data/me/selectors';
import { signInSuccess } from 'app/data/me/actionCreators';

import Login from './Login';

import './login.css';

const mapStateToProps = state => ({
  me: getUser(state),
  authenticated: authenticated(state),
});

const mapDispatchToProps = dispatch => ({
  signInSuccess: (user) => dispatch(signInSuccess(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);