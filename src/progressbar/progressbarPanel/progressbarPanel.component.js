import React, { Component } from "react";
import "./progressbarPanel.component.css";
class ProgressbarPanel extends Component {
  render() {
    let classes = 'progressbar-panel';
    if(this.props.isActive) classes += ' active';
    return <p className={classes}>{this.props.text}</p>;
  }
}
export default ProgressbarPanel;