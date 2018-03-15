import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute';

import Login from './screens/Login';
import Main from './screens/Main';
import Boards from './screens/Boards';
import Board from './screens/Board';
import LeaderBoard from './screens/LeaderBoard';
import UserNav from './components/UserNav';

const RootRouter = () => (
  <div>
    <UserNav />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/boards" component={Boards} />
      <PrivateRoute path="/board/:id" component={Board} />
      <PrivateRoute path="/leader-board" component={LeaderBoard} />
    </Switch>
  </div>
)

export default RootRouter;