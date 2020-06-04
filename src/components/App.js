import React, {Component} from 'react';
import Board from './Board.js';
import Info from './Info.js';
import Header from './Header.js'

class Game extends Component {

  constructor(){
    super();
    this.state = {
      isPlaying: false,
      start: false,
      turn:0,
      playerX: "",
      playerO: "",
      reset: false
    };
  }

  newGame = () =>{
    this.setState({
      isPlaying: false,
      start: false,
      turn:0,
      playerX: "",
      playerO: "",
      reset: false
    })
  }

  changeReset = (stateReset) => {
    this.setState({
      reset: stateReset
    });
  }

  startGame = (n_player1,n_player2) =>{
    this.setState ({
      turn: 1,
      playerO: n_player1,
      playerX: n_player2
    });
    this.changeIsPlaying();
  }

  changeStart = () => {
    this.setState({
      start: true
    })
  }

  changeIsPlaying = () => {
    this.setState({
      isPlaying: true
    });
  }

  changeTurn = (turn) => {
    if(turn == 1)
      this.setState({
        turn:2
      })
    else
    this.setState({
      turn:1
    })
  }


  render(){
    return (
      <div className="container">
        <Header
          start = {this.state.start}
          changeStart = {this.changeStart}/>
        <Info
          turn={this.state.turn}
          start ={this.state.start}
          startGame = {this.startGame}/>
        <Board
          isPlaying = {this.state.isPlaying}
          playerX={this.state.playerX}
          playerO ={ this.state.playerO}
          turn = {this.state.turn}
          changeTurn = {this.changeTurn}
          changeStart ={this.changeStart}
          reset= {this.state.reset}
          changeReset = {this.changeReset}
          newGame = {this.newGame}/>
      </div>
    );
  }
}

export default Game;
