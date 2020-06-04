import React from 'react';
import Logo from '../images/logo.png';


const Header = (props) => {

  let button;

  function handleStart (){
    props.changeStart();
  }

  if(!props.start)
    button = <button className = "btn btn-dark niceFont" onClick={handleStart}> Start </button>

  return(
    <div className="center">
      <img  className= "logo" src={Logo}/>
      <h1 className="niceFont">TIC TAC TOE</h1>
      {button}
    </div>
  );
}

export default Header;
