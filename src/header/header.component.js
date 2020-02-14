import React, { Component } from "react";
import "./header.component.css";
class Header extends Component {

  render() {
    return <div className="header"> 
        <img className="logo" src="https://mir-s3-cdn-cf.behance.net/projects/max_808/fd409468620267.5b631a488b681.png"/>
          <span>Счёт:{this.props.score}</span>
      </div>
    }
}
export default Header;