import React, { Component } from 'react'
//import Protected from './Protected';

export default class Login extends Component {
  render() {
    const { isLoggedIn, updateLoggedIn } = this.props;
    return (
      <div >
        <button onClick={() => updateLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
      </div>
    )
  }
}
