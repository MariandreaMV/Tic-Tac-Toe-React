import React, {Component} from 'react';
import X from '../images/1.png';
import O from '../images/0.png';


class Info extends Component{

  playerX = React.createRef();
  playerO = React.createRef();


  handleSubmit = (e) =>{
    if(this.playerX.current.value=="" || this.playerO.current.value=="")
      alert("You have to introduce both players name")
    else
      this.props.startGame(this.playerO.current.value,this.playerX.current.value);

  }

  render(){
      if(this.props.start && this.props.turn ==0)
  return(
    <div >
      <div className ="center">
        <div className="form-row">
          <div className="form-group col-md-6 niceFont">
            <label>Name <img className="icon" src={X}/></label>
            <input type="text" ref={this.playerX} className="form-control"/>
          </div>
          <div className="form-group col-md-6 niceFont">
            <label>Name <img className="icon" src={O}/></label>
            <input type="text" ref = {this.playerO} className="form-control"/>
          </div>
        </div>
        <button type="submit" className="btn btn-dark niceFont" onClick={this.handleSubmit}>Start Game</button>
      </div>
    </div>
  )
  else {
    return(
      <div>
      </div>
    )
    }
  }
}


export default Info;
