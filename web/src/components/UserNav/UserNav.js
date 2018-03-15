import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './UserNav.css';

import { auth } from 'app/services/firebase';

const logout = (successCallback) => () => {
  auth().signOut().then(() => { console.log('signout done');successCallback() }, (error) => {
    alert(error)
  })
}

const UserNav = ({ authenticated, signOutSuccess, history }) => {
  // THis is not for non-user
  if (!authenticated) return null;

  return (
    <nav className="user-nav">
      <Link to="boards">Boards</Link>
      <Link to="leader-board">Leader Boards</Link>
      <a onClick={logout(signOutSuccess)}>Logout</a>
    </nav>    
  )
};

UserNav.propTypes = {
  signOutSuccess: PropTypes.func
};

UserNav.defaultProps = {
  
};

export default UserNav