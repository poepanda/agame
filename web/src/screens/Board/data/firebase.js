import { firestore, extractListData } from 'app/services/firebase';

export const tilesGet = (boardId) => {
  window.firestore = firestore;
  return firestore.doc(`boards/${boardId}`).collection('tiles').get().then(snapshot => extractListData(snapshot));
}