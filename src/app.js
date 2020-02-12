import React, { Component } from "react";
import Progressbar from "./progressbar/progressbar.component";
import Picture from "./picture/picture.component";
import Header from "./header/header.component";
import AnswerArea from "./answerArea/answerArea.component";
import Player from "./player/player.component";
import birddata from "./birdsdata";
import "./app.css";

let stages = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
let plug = 'https://pbs.twimg.com/profile_images/1065857539978510337/tgJrluTu_400x400.jpg';
class App extends Component {

  constructor() {
    super();
    this.state = {
      stage: 0,
      score: 0,
      deltaScore: 5,
      isGuessed: false,
    }
    this.state.answer = Math.floor(Math.random() * birddata[this.state.stage].length)
    this.nextStage = this.nextStage.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
    this.restart = this.restart.bind(this);
  }

  nextStage() {
    if (this.state.isGuessed) {
      this.setState((state) => {
        let tmp = {
          stage: state.stage + 1,
          score: state.score,
          deltaScore: 5,
          isGuessed: false,
        };
        if(tmp.stage < birddata.length)
        tmp.answer = Math.floor(Math.random() * birddata[tmp.stage].length)
        return tmp;
      });
    }
    else alert("Сначала решение");
  }

  restart() {
    let tmp = {
      stage: 0,
      score: 0,
      deltaScore: 5,
      isGuessed: false,
    }
    tmp.answer = Math.floor(Math.random() * birddata[tmp.stage].length)
    this.setState(tmp);
  }

  getAnswer(isCorrect) {
    if (isCorrect) {
      let tmp = { ...this.state, isGuessed: isCorrect };
      tmp.score = this.state.score + this.state.deltaScore;
      this.setState(tmp);
    }
    else {
      let tmp = { ...this.state };
      tmp.deltaScore = this.state.deltaScore - 1;
      this.setState(tmp);
    }
  }

  render() {
    if (this.state.stage < birddata.length)
      return <div className="wrapper">
        <Header score={this.state.score} />
        <Progressbar stages={stages} stage={this.state.stage} />
        <div className="question">
        <h2 >{(() => { return !this.state.isGuessed ? "********" : birddata[this.state.stage][this.state.answer].name })()}</h2>
        <Picture src={(() => { return !this.state.isGuessed ? plug : birddata[this.state.stage][this.state.answer].image })()} />
        </div>        
        <Player src={birddata[this.state.stage][this.state.answer].audio} />
        <button className="next-level" onClick={this.nextStage}>{(() => this.state.stage === birddata.length - 1 ? "Завершить" : "Дальше")()}</button>
        <AnswerArea key={this.state.stage} getAnswer={this.getAnswer} isGuessed={this.state.isGuessed} stage={this.state.stage} answer={this.state.answer} birds={birddata[this.state.stage]} />
      </div>
    else
      return <div className="wrapper">
        <Header score={this.state.score} />
        <div>
          <h2>Вы прошли игру</h2>
          <p>Ваш счёт {this.state.score} из 30</p>
          <button  className="next-level" onClick={this.restart}>Заново</button>
        </div>
      </div>
  }
}
export default App;