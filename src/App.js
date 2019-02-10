import React, { Component } from 'react';
import ScoreBoard from "./components/scoreBoard.js";
import DeckScreen from "./components/deckScreen.js";
import ResultScreen from "./components/resultScreen.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //"choose", "result"
      gameState: "choose",

      //"win", "lose", "draw"
      result: "",
      humanMove: "",
      robotMove: "",

      humanPoints: 0,
      robotPoints: 0
    }
    document.title = "Rock, Paper, Scissor";
  }

  computerMove = () => {
    //0 = Rock, 1 = Paper, 2 = Scissor
    return Math.floor(Math.random() *3);
  }

  choose = (humanMove) => {
    var computerMove = this.computerMove();
    var result = "";

    if (humanMove === computerMove) {
      result = "draw";
    } else if (computerMove + 1 === humanMove || computerMove + 1 === humanMove + 3) {
      result = "win";
    } else {
      result = "lose";
    }

    this.setState({
      result: result,
      humanMove: humanMove === 0 ? "Rock" : humanMove === 1 ? "Paper" : "Scissor",
      robotMove: computerMove === 0 ? "Rock" : computerMove === 1 ? "Paper" : "Scissor",
      humanPoints: result === "win" ? this.state.humanPoints + 1 : this.state.humanPoints,
      robotPoints: result === "lose" ? this.state.robotPoints + 1 : this.state.robotPoints,
      gameState: "result"
    });
  }

  playAgain = () => {
    this.setState({
      ...this.state,
      result: "",
      gameState: "choose"
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <p id="header-text">Rock, Paper, Scissor</p>
        </header>

        <main>
          <ScoreBoard humanPoints={this.state.humanPoints} robotPoints={this.state.robotPoints} ></ScoreBoard>

          {this.state.gameState === "choose" &&
            <DeckScreen onClick={this.choose}></DeckScreen>
          }

          {this.state.gameState === "result" &&
            <ResultScreen
              humanMove={this.state.humanMove}
              robotMove={this.state.robotMove}
              result={this.state.result}
              onClick={this.playAgain}>
            </ResultScreen>
          }
        </main>
      </div >
    );
  }
}

export default App;
