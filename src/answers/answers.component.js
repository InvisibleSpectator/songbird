import React, { Component } from "react";
//import "./picture.component.css";
class Answers extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <ul>
      {
        this.props.answerList.map((answer) => <li key={answer.id}>{answer.name}</li>)
      }
    </ul>
  }
}
export default Answers;