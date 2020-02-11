import React, { Component } from "react";
import Progressbar from "./progressbar/progressbar.component";
import Answers from "./answers/answers.component";
import birddata from "./birdsdata";
//import "./picture.component.css";
let stages = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
class App extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      stage: 0,
    }
    this.nextStage = this.nextStage.bind(this);
  }

  nextStage(){
    
    this.setState((state) => {return {stage: state.stage+1}});
  } 

  render() {
    return <div>
      <Progressbar stages = {stages}/>
      <Answers answerList={birddata[this.state.stage]}/>
      <button onClick={this.nextStage}></button>
    </div>
  }
}
export default App;