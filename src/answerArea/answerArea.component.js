import React, { Component } from "react";
import Answers from "./answers/answers.component";
import Info from "./info/info.component";
import "./answerArea.component.css";
class AnswerArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bird: undefined
    }
    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer(answer) {
    this.setState({ bird: answer })
  }

  render() {
    return <div className="answer-area">
      <Answers updateInfoHandler={this.getAnswer} getAnswer={this.props.getAnswer} isGuessed={this.props.isGuessed} correctAnswer={this.props.answer} stage={this.props.stage} answerList={this.props.birds} />
      <Info bird={this.state.bird} />
    </div>
  }
}
export default AnswerArea;