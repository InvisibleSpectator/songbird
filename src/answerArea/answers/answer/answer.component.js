import React, { Component } from "react";
import "./answer.component.css";
class Answers extends Component {

  constructor(props) {
    super(props);
    this.tryAnswer = this.tryAnswer.bind(this);
    this.state ={
      bird: this.props.data,
      isCorrect: this.props.isCorrect,
      isClicked: false
    }
  }

  tryAnswer(){
    if(!this.props.isGuessed){
      this.props.getAnswer(this.state.isCorrect);
      this.setState({...this.state,
      isClicked:true});
    }
    this.props.updateInfoHandler(this.state.bird);
  }

  render() {
    return <li className={(() => {
      let classes = "answer";
      if(this.state.isClicked)
      if(this.state.isCorrect) 
      classes+=" correct"; 
      else classes+=" wrong"
      return classes;
    })()} onClick={this.tryAnswer}>{this.props.data.name}</li>
  }
}
export default Answers;