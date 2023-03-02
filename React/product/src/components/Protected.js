import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
export default class Protected extends Component {
  render() {
    let { login } = this.props;
    let { Component } = this.props;
    
      return login ? <Component />: <Login/>;
    
  }
}
