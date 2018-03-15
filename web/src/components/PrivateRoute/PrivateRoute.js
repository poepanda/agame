import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, inProgress, authenticated, ...rest}) => {
  // return nothing while waiting for user state
  if (inProgress) return null;
  return (
    <Route {...rest} component={(props) => (
      authenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect 
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}/>
      )
    )}/>
  )
}