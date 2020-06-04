import React, {Component}  from 'react';
import X from '../images/1.png';
import O from '../images/0.png';




class  Cell extends Component {

  constructor(){
    super();
    this.state = {
      player : 0,
      img : <img/>
    };
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.reset){
        this.setState({
          player : 0,
          img : <img/>
        });
        nextProps.changeReset(false);
        nextProps.changeTurn(2);
      }
  }

  handleclick = () =>{
    if(this.state.player ==0){
      if(this.props.turn == 1)
        this.setState({
          img: <img className="squareIcon" src={X}/>,
          player : this.props.turn
        });
      else
        this.setState({
          img: <img className="squareIcon" src={O}/>,
          player : this.props.turn
        });
    this.props.updateBoard(this.props.id,this.props.turn);
    this.props.changeTurn(this.props.turn);
    }
    else{
      alert("you can't play there");
    }
  }

render(){
  return(
    <button className="square btn btn-outline-dark" onClick={this.handleclick}>
      {this.state.img}
    </button>
  );}
}


export default Cell;
