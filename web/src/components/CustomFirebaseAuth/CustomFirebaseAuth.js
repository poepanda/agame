import React, { Component } from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from 'firebase';

const firebaseConf = {
  apiKey: "AIzaSyBR7k5D4rB7WHmcLNLUP7bNfxTuH00b-t4",
  authDomain: "pcode-a-game.firebaseapp.com",
  databaseURL: "https://pcode-a-game.firebaseio.com",
  projectId: "pcode-a-game",
  storageBucket: "pcode-a-game.appspot.com",
  messagingSenderId: "141581866922"
}
firebase.initializeApp(firebaseConf);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/boards',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: (user) => console.log('logedin user', user)
  }
}

export default class FirebaseAuth extends Component {
  render() {
    return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    )
  }
}

