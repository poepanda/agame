import React, { Component } from 'react'

import './Board.css';

const getBoardId = (match) => match.params.id;

export default class Board extends Component {
  constructor(props) {
    super(props);

    this._renderListOfTiles = this._renderListOfTiles.bind(this);
  }

  componentWillMount() {
    console.log(this.props);
    const { getTiles, match } = this.props;
    const boardId = getBoardId(match);
    if (boardId !== undefined) {
      getTiles(boardId);
    }
  }

  _renderListOfTiles() {
    const { listOfTiles, match } = this.props;
    const boardId =  getBoardId(match);
    console.log('list', listOfTiles(boardId));
    if (boardId === undefined || !listOfTiles(boardId)) return null;
    return listOfTiles(boardId).map( item => {
      return (
        <div className="board__item" key={item.name}>
          {item.name}
        </div>
      )
    })
    return null;
  }

  render() {
    return (
      <div className="board">
        <div className="board__container">
          { this._renderListOfTiles() }
        </div>
      </div>
    )
  }
}