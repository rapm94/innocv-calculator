import React from "react";
import "../App.css";

export  const CalculatorButton = (props) =>{

const handleClick = (value) => {
    
}


  return (
    <button className="calculator-button" onClick={()=> handleClick(props.value)}>
      {props.value}
    </button>
  );
}
