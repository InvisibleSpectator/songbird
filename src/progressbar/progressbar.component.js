import React, { Component } from "react";
import ProgressbarPanel from "./progressbarPanel/progressbarPanel.component"
import "./progressbar.component.css";
class Progressbar extends Component {
  render() {
    return <div className="progressbar">{this.props.stages.map((stage, index) => <ProgressbarPanel key={index} isActive={index === this.props.stage} text={stage} />)}</div>;
  }
}
export default Progressbar;