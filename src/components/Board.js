import React, {Component}  from 'react';
import X from '../images/1.png';
import O from '../images/0.png';
import Cell from './Cell.js';


class Board extends Component {

  constructor(){
    super();
    this.state ={
      board : [0,0,0,0,0,0,0,0,0],
      winner: false
    }
  }

  create_board (){
        let board =[];
      let cont=0;
        for (var y = 0; y < 3; y++) {
          let row=[];
          for (var x = 0; x <3 ; x++) {
              row.push(<Cell turn = {this.props.turn} changeTurn ={this.props.changeTurn} id={cont} updateBoard={this.updateBoard} reset={this.props.reset} changeReset={this.props.changeReset} key = {cont}/>);
              cont ++;
          }
          board.push(<div className="row" key = {y}>{row}</div>);
        }
        return board
    }

  resetBoard = () =>{
    this.setState({
      board : [0,0,0,0,0,0,0,0,0],
      winner: false
    });
  }

  isWinner = (currentBoard,turn)=> {
    var winner =false;
    var winninOptions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < winninOptions.length; i++) {
      if(currentBoard[winninOptions[i][0]] == turn && currentBoard[winninOptions[i][1]] == turn && currentBoard[winninOptions[i][2]] == turn) {
        winner = true;
        this.setState({
          winner : turn
        });
        break;
      }
    }
  }

  updateBoard = (index,turn) =>{
    var currentBoard = this.state.board;
    currentBoard[index] = turn;
    this.setState({
      board: currentBoard
    })
    this.isWinner(currentBoard,turn);
  }

  handleReset =() =>{
    if(!this.state.winner)
      this.props.changeReset(true);
    this.resetBoard();
  }

  newGame = () =>{
    this.props.newGame();
    this.resetBoard();
  }

  winner = () => {
    if(this.state.winner == 1)
      return <h1 className = "niceFont"> {this.props.playerX} Wins! with <img className = "icon" src ={X}/></h1>
    else
      return <h1 className = "niceFont"> {this.props.playerO} Wins! with <img className = "icon" src ={O}/></h1>
  }


  render(){
  if(this.props.isPlaying && this.state.winner == false)
  return(
    <div>
      <div className = "together">
        <p className="niceFont"><img className = "icon" src ={X}/>{this.props.playerX}</p>
        <p className="niceFont"><img className = "icon" src ={O}/> {this.props.playerO}</p>
      </div>
      <div className = "board">
        {this.create_board()}
      </div>
      <div className = "together">
        <button className = "btn btn-dark niceFont" onClick ={this.newGame}>New Game</button>
        <button className = "btn btn-dark niceFont" onClick={this.handleReset}>Reset</button>
      </div>
    </div>
  );
  else
    if(this.state.winner)
      return(
        <div className="alert alert-info" role="alert">
          <div className="center">
            {this.winner()}
          </div>
          <div className = "together">
            <button className = "btn btn-dark niceFont" onClick ={this.newGame}>New Game</button>
            <button className = "btn btn-dark niceFont" onClick={this.handleReset}>Reset</button>
          </div>
        </div>
      );
    else
      return(
        <div></div>
      );
  }
}

export default Board;
