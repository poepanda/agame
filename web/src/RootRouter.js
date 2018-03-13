import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Login from './screens/Login';
import Boards from './screens/Boards';
import LeaderBoard from './screens/LeaderBoard';

const RootRouter = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/boards" component={Boards} />
    <Route path="/leader-board" component={LeaderBoard} />
  </Router>
)

export default RootRouter;