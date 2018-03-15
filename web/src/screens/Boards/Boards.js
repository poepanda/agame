import React, { Component } from 'react'

import './Boards.css';

export default class Boards extends Component {
  constructor(props) {
    super(props);

    this._renderListOfBoard = this._renderListOfBoard.bind(this);
    this.openBoard = this.openBoard.bind(this);    
  }
    
  componentWillMount() {
    this.props.getBoards();
  }

  openBoard(event) {
    this.props.history.push(`/board/${event.target.getAttribute('board-id')}`);
  }

  _renderListOfBoard() {
    const { listOfBoards } = this.props;
    if (!listOfBoards) return null;
    return listOfBoards.map( item => {
      return (
        <div onClick={this.openBoard} board-id={item.name} className="boards__item" key={item.name}>
          {item.name}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="boards">
        <h1>Welcome on-Boards</h1>
        <p>Please select a board</p>
        <div className="boards__container">
          { this._renderListOfBoard() }
        </div>
      </div>
    )
  }
}