import React, { Component } from "react";
import Answer from "./answer/answer.component"
//import "./picture.component.css";
class Answers extends Component {
  render() {
    return <ul className="answers">
      {
        this.props.answerList.map((answer, index) => <Answer getAnswer={this.props.getAnswer} isGuessed={this.props.isGuessed} updateInfoHandler={this.props.updateInfoHandler} isCorrect={this.props.correctAnswer === index} data={answer} key={""+this.props.stage+answer.id}/>)
      }
    </ul>
  }
}
export default Answers;