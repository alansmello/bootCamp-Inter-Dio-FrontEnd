import React, {useState, useEffect} from 'react';
import SmartCounter from '../SmartCounter/SmartCounter';
import './IfoodCounter.css';

export default function IfoodCounter() {

  const [value, setValue] = useState(0);
  let preco = 5.00;
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");
  useEffect(()=>{
        document.getElementById("moeda").innerHTML = preco*value;
    },[value])
  function down(){
    if(value <= 1){
        setButtonStyle("counter-button-minus-desactive")
    }if(value >0)
    setValue (value - 1)
    
  }
  function up(){
    setValue (value + 1)
    setButtonStyle("counter-button-minus-active")
  }
    return (
  <div className = "counter-wrapper">
    <button
    className= {buttonStyle}
    onClick = {down}>
    -
    </button>
        
    <p>{value}</p>
    
    <button 
    className= "counter-button-plus-active"
    onClick = {up}>
    +
    </button>
       
    <button id="moeda">{preco}</button>
  </div>
  )
}

