import firebase from 'firebase';

import { firebase as config } from './config'
import 'firebase/firestore';

firebase.initializeApp(config);

export default firebase;

// Authentication
export const auth = firebase.auth;

// Firestore accessing
export const firestore = firebase.firestore();

// Utilities functions to handle particular tasks
export const extractListData = (snapshot) => {
  const list = [];

  snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() })); 

  return list;
}