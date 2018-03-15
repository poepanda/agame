import { firestore } from './firebase';

export const generateTiles = (id, data) => {
  for (let i = 0, len = data.size; i < len; i++) {
    const name = `tile${i}`;
    firestore.doc(`boards/${id}/tiles/${name}`).set({
      name,
      bidder: null
    }).then(() => console.log('Tile created!'));
  }
}

export const generateBoards = () => {
  const boards = firestore.collection('boards');
  const listOfBoards = [ 'love', 'life', 'animals', 'airline' ];
  listOfBoards.forEach((name) => {
    const board = boards.doc(name)
    board.set({
      name,
      size: 9
    }).then(() => {
      console.log('board craeted!')
      // After the board is created
      // We continue to generate the tiles
      board.get().then(doc => generateTiles(doc.id, doc.data()));
    });
    
  })

}