import React, { Component } from "react";
import Progressbar from "./progressbar/progressbar.component";
import Answers from "./answers/answers.component";
import Player from "./player/player.component";
import birddata from "./birdsdata";
import Info from "./info/info.component";
//import "./picture.component.css";
let stages = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
class App extends Component {

  constructor() {
    super();
    this.state =  {
      stage: 0,
      score: 0,
      deltaScore: 5,
      isGuessed: false,
    }
    this.state.answer = Math.floor(Math.random() * birddata[this.state.stage].length)
    this.nextStage = this.nextStage.bind(this);
  }

  nextStage() {
    console.log(this.state)
    this.setState((state) => {
      let tmp = {
        stage: state.stage + 1,
        score: state.score + state.deltaScore,
        deltaScore: 5,
        isGuessed: false,
      };
      tmp.answer = Math.floor(Math.random() * birddata[tmp.stage].length)
      return tmp;
    });
  }

  render() {
    return <div>
      <Progressbar stages={stages} stage={this.state.stage} />
      <Player src={birddata[this.state.stage][this.state.answer].audio}/>
      <Answers answerList={birddata[this.state.stage]} />
      <button onClick={this.nextStage}></button>
    </div>
  }
}
export default App;