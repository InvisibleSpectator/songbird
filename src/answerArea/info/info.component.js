import React, { Component } from "react";
import Picture from "../../picture/picture.component";
import Player from "../../player/player.component";
import "./info.component.css";
class Info extends Component {

  render() {
     if(this.props.bird !== undefined)
     return <div className="info">
      <Picture src={this.props.bird.image} />
      <div className="names">      
        <p className="name">{this.props.bird.name}</p>
      <p className="latin">{this.props.bird.species}</p>
      </div>

      <Player  src={this.props.bird.audio} />
      <p className="description">{this.props.bird.description}</p>
    </div>
    else return <div className="info empty">Прослушайте запись и угадайте птицу</div>
  }
}
export default Info;