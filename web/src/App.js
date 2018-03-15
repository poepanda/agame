import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './store/configureStore';
import RootRouter from './RootRouter';

import './App.css';

const { store } = configureStore() ;

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <RootRouter />
        </Provider>
      </Router>
    );
  }
}

export default App;
