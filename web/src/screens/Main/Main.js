import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Main extends Component {
  render() {
    const { authenticated } = this.props;
    if (authenticated) {
      return (
        <div>Welcome</div>
      )
    }

    return <Redirect to={{
      pathname: '/login'
    }} />
  }
}