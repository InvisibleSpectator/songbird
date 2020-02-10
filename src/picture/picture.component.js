import React, { Component } from "react";
import "./picture.component.css";
class Picture extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <img src={this.props.src}></img>;
  }
}
export default Picture;