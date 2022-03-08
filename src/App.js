import './App.css';
import {CalculatorButton} from './components/CalculatorButton';
import { useState, useContext } from 'react';


function App() {

const calculatorInitialState = {
  displayValue: '0',
  operator: null,
  firstOperand: null,
  waitingForSecondOperand: false
};

const [calculator, setCalculator] = useState(calculatorInitialState);

const numberButtons = [1,2,3,4,5,6,7,8,9,0,];
const operatorButtons = ['+','-','*','/'];


  return (
  <>
  <div className='calculator-container'>
    <section className='output-section'>
      <div className='output-container'>
        <h1>{calculator.displayValue}</h1>
      </div>
    </section>
    <section className='input-section'>
    <div className='number-grid'>
      {numberButtons.map((button, i) => <CalculatorButton key={i}  value={button} />)}
      <CalculatorButton value='='/>
      <CalculatorButton value='C'/>
    </div>
    <div className='operator-grid'>
      {operatorButtons.map((button, i) => <CalculatorButton key={i}  value={button}/>)}
    </div>
    </section>
    
  </div>
  </>
  );
}

export default App;
