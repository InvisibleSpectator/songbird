import React, { Component } from "react";
import Picture from "../picture/picture.component";
import Player from "../player/player.component";
//import "./picture.component.css";
class Info extends Component {

  render() {
    return <div>
      <Picture src={this.props.image} />
      <span>{this.props.name}</span>
      <span>{this.props.species}</span>
      <Player src={this.props.audio} />
      <p>{this.props.description}</p>
    </div>
  }
}
export default Info;