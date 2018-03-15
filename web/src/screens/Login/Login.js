import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import CustomFirebaseAuth from 'app/components/CustomFirebaseAuth/CustomFirebaseAuth';

export default class Login extends Component {
  render() {
    const { authenticated, signInSuccess } = this.props;

    if (authenticated) {
      return (
        <Redirect to="/"/>
      )
    }

    return (
      <div className="login">
        <div className="login__tile-logo">
          ?
        </div>
        <div className="login__methods">
          <CustomFirebaseAuth signInSuccess={signInSuccess}/>
        </div>
        <p className="login__guide-text">Who are you?!</p>
      </div>
    )
  }
}