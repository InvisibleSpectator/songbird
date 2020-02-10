import React, { Component } from "react";
import ProgressbarPanel from "./progressbarPanel/progressbarPanel.component"
//import "./picture.component.css";
class Progressbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.stages.map((stage,index) => <ProgressbarPanel key={index} text={stage} />)}</div>;
  }
}
export default Progressbar;