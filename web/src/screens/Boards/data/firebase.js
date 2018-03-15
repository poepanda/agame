import { firestore, extractListData } from 'app/services/firebase';

export const boardsGet = () => {
  return firestore.collection('boards').get().then(snapshot => extractListData(snapshot));
}