import { connect } from 'react-redux';

import { authenticated } from 'app/data/me/selectors';

import Main from './Main';

const mapStateToProps = state => ({
  authenticated: authenticated(state)
});

export default connect(
  mapStateToProps,
  null,
)(Main);