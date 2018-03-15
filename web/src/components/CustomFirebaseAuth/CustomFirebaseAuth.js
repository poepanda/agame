import React, { Component } from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import firebase from 'app/services/firebase';

const uiConfig = ({ signInSuccess }) => ({
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess
  }
})

export default class FirebaseAuth extends Component {
  render() {
    const { signInSuccess } = this.props;
    return (
      <StyledFirebaseAuth 
        uiConfig={
          uiConfig({
            signInSuccess
          })
        }
        firebaseAuth={firebase.auth()}/>
    )
  }
}

