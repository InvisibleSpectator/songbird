import React, { Component } from "react";
import Answer from "./answer/answer.component"
//import "./picture.component.css";
class Answers extends Component {

  constructor() {
    super();
    this.tryAnswer = this.tryAnswer.bind(this);
  }

  tryAnswer(e){
    console.log(e.target)
  }

  render() {
    return <ul>
      {
        this.props.answerList.map((answer) => <Answer data={answer} key={answer.id}/>)
      }
    </ul>
  }
}
export default Answers;