import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RootRouter from './RootRouter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A game</h1>
        <h2>Just simply a game</h2>
        <ul>
          <li><Link to="/boards">Boards</Link></li>
          <li><Link to="/leader-board">Leader Board</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
        <RootRouter />
      </div>
    );
  }
}

export default App;
