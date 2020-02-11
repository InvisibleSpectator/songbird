import React, { Component } from "react";
import "./answer.component.css";
class Answers extends Component {

  constructor(props) {
    super(props);
    this.tryAnswer = this.tryAnswer.bind(this);
    this.state = props.data
  }

  tryAnswer(e){
    console.log(this.state)
  }

  render() {
    return <li className="answer" onClick={this.tryAnswer}>{this.props.data.name}</li>
  }
}
export default Answers;