import React, { Component } from "react";
//import "./picture.component.css";
class Player extends Component {

  render() {
    return <audio className="player" src={this.props.src} controls></audio>
  }
}
export default Player;