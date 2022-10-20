import './App.css';
import React, {useState} from 'react';

function App() {
  
  let [disp, setDisp] = useState("");
  let [disp2, setDisp2] = useState("");
  let [op, setOp] = useState("");

  const mainDisp = disp ? disp : disp2;
  
  function concatNum(e) {
    if(disp === '0'){
      setDisp(disp = '');
    }
    setDisp(disp + e.target.value);
  }

  function concatZero(e) {
    if(disp === '0'){
      return;
    }
    setDisp(disp + e.target.value);
  }

  function dotConcat(e) {
    const regExp = /\./gm;
    if(!disp.match(regExp)){
      setDisp(disp + ".");
    } else {
      setDisp(disp + "");
    }
  } 

  function plus(e) {
    disp = +disp;
    disp2 = +disp2;
    setOp(op = e.target.value);
    if(!disp2){
      setDisp2(disp2 = disp);
    }
    else {
      if(Number.isInteger(disp) || Number.isInteger(disp2)){
        setDisp2(disp2 += disp);
      } else {
        setDisp2((disp2 += disp).toFixed(1));
      }
    }     
    setDisp(disp = '');
  }

  function minus(e) {
    disp = +disp;
    disp2 = +disp2;
    setOp(op = e.target.value)
    if(!disp2){
      setDisp2(disp2 = disp);
    }
    else {
      if(Number.isInteger(disp) || Number.isInteger(disp2)){
        setDisp2(disp2 -= disp);
      } else {
        setDisp2((disp2 -= disp).toFixed(1));
      }
    }     
    setDisp(disp = '');
  }

  function devide(e) {
    disp = +disp;
    disp2 = +disp2;
    setOp(op = e.target.value);
    if(!disp2){
      setDisp2(disp2 = disp);
    }
    else {
      if(Number.isInteger(disp) || Number.isInteger(disp2)){
        setDisp2(disp2 /= disp);
      } else {
        setDisp2((disp2 /= disp).toFixed(1));
      }
    }     
    setDisp(disp = '');
  }

  function mult(e) {
    disp = +disp;
    disp2 = +disp2;
    setOp(op = e.target.value);
    if(!disp2){
      setDisp2(disp2 = disp);
    }
    else {
      if(Number.isInteger(disp) || Number.isInteger(disp2)){
        setDisp2(disp2 *= disp);
      } else {
        setDisp2((disp2 *= disp).toFixed(1));
      }
    }     
    setDisp(disp = '');
  }

  function degree(e) {
    disp = +disp;
    disp2 = +disp2;
    setOp(op = e.target.value)
    if(!disp2){
      setDisp2(disp2 = disp);
    }
    else {
      if(Number.isInteger(disp) || Number.isInteger(disp2)){
        setDisp2(disp2 **= disp);
      } else {
        setDisp2((disp2 **= disp).toFixed(1));
      }
    }     
    setDisp(disp = '');
  }

  
  function percent(e) {
    disp = +disp;
    disp2 = +disp2;
    setOp(op = e.target.value);
    if(!disp2){
      setDisp2(disp2 = disp);
    }
    else {
      if(Number.isInteger(disp) || Number.isInteger(disp2)){
        setDisp2(disp2 = disp2 / 100 * disp);
      } else {
        setDisp2((disp2 = disp2 / 100 * disp).toFixed(1));
      }
    }     
    setDisp(disp = '');
  }


  function calcPlus(e) {
    disp = +disp;
    disp2 = +disp2;
    if(Number.isInteger(disp) || Number.isInteger(disp2)){
      setDisp(disp += disp2);
    } else {
      setDisp((disp2 += disp).toFixed(1));
    }
    setOp(op = "=");
    setDisp2(disp = '');
  }

  function calcMinus(e) {
    disp = +disp;
    disp2 = +disp2;
    if(Number.isInteger(disp) || Number.isInteger(disp2)){
      setDisp(disp2 -= disp);
    } else {
      setDisp2((disp2 -= disp).toFixed(1));
    }
    setOp(op = "=");
    setDisp2(disp = '');
  }

  function calcDevide(e) {
    disp = +disp;
    disp2 = +disp2;
    if(Number.isInteger(disp) || Number.isInteger(disp2)){
      setDisp(disp2 /= disp);
    } else {
      setDisp2((disp2 /= disp).toFixed(1));
    }
    setOp(op = "=");
    setDisp2(disp = '');
  }

  function calcMult(e) {
    disp = +disp;
    disp2 = +disp2;
    if(Number.isInteger(disp) || Number.isInteger(disp2)){
      setDisp(disp2 *= disp);
    } else {
      setDisp2((disp2 *= disp).toFixed(1));
    }
    setOp(op = "=");
    setDisp2(disp = '');
  }

  function calcDegree(e) {
    disp = +disp;
    disp2 = +disp2;
    if(Number.isInteger(disp) || Number.isInteger(disp2)){
      setDisp(disp2 **= disp);
    } else {
      setDisp2((disp2 **= disp).toFixed(1));
    }
    setDisp2(disp = '');
  }

  function calcPercent(e) {
    disp = +disp;
    disp2 = +disp2;
    if(Number.isInteger(disp) || Number.isInteger(disp2)){
      setDisp(disp2 = disp2 / 100 * disp);
    } else {
      setDisp2((disp2 = disp2 / 100 * disp).toFixed(1));
    }
    setDisp2(disp = '');
  }

  function matchSqrt() {
    setDisp(disp = (Math.sqrt(disp)).toFixed(2));
  }

  function clear() {
    setDisp(disp = '');
    setDisp2(disp2 = '');
    setOp(op = '');
  }

  const createNumbers = () => {
    const numbers = [];
    for(let i = 1; i < 10; i++){
      numbers.push(
        <button value={i} key={i} onClick = {concatNum}>{i}</button>
      )
    }
    return numbers;
  }

  return (
    <div className="App">
      <div className="title__app">CALCULATOR in REACT</div>
        <div className="wrap__calc">
            <div className="all__display">
              <div className="display">{ mainDisp || 0 }</div>
              <div className="display2">{ op }</div>
            </div>
            
            <div className="operators">
                    <button value={'/'} onClick={devide}>/</button>
                    <button value={'*'} onClick={mult}>*</button>
                    <button value={'+'} onClick={plus}>+</button> 
                    <button value={'-'} onClick={minus}>-</button>
                    <button value={'√'} onClick={matchSqrt}>√</button>
                    <button value={'^'} onClick={degree}>x^y</button>
                    <button value={'%'} onClick ={percent}>%</button>
                    <button value={'C'} onClick = {clear}>C</button>
                    <button value={'.'} onClick = {dotConcat}>.</button>
                    <button onClick={(e) => {
                      if(op === '+'){
                         return calcPlus(e);
                      }
                      if(op === '-'){
                        return calcMinus(e);
                      }
                      if(op === '/'){
                        return calcDevide(e);
                      }
                      if(op === '*'){
                        return calcMult(e);
                      }
                      if(op === '^'){
                        return calcDegree(e);
                      }
                      if(op === '%'){
                        return calcPercent(e);
                      }
                    }}>=</button>
            </div>
            <div className="numbers">
              <button value="0" onClick={concatZero}>0</button>
                { createNumbers() }
            </div>
        </div>
    </div>
  );
}

export default App;