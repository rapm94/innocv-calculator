import React, { useState } from "react";
import "./App.css";
import { CalculatorButton } from "./components/CalculatorButton";

function App() {

  //creating the arrys of the buttons and the values
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operatorButtons = ["+", "-", "*", "/"];

  // set the initial state of the calculator
  const [calculatorState, setCalculatorState] = useState({
    displayValue: "",
    operator: "",
    firstValue: "",
    waitingForSecondValue: false,
    secondValue: "",
  });

  //handle number button click and update display value
  const handleNumberClick = (number) => {
    let inputNumber = number.toString();
    if (calculatorState.displayValue.length < 10) {
      if (calculatorState.waitingForSecondValue) {
        setCalculatorState({
          ...calculatorState,
          displayValue: inputNumber,
          waitingForSecondValue: false,
          secondValue: inputNumber,
        });
      } else {
        setCalculatorState({
          ...calculatorState,
          displayValue: calculatorState.displayValue + inputNumber,
          firstValue: calculatorState.firstValue + inputNumber,
        });
      }
    } else {
      alert("Sorry max 10 digits per input!");
    }
  };

  //handle operator click and set the operator
  const handleOperatorClick = (operator) => {
    setCalculatorState({
      ...calculatorState,
      operator: operator,
      waitingForSecondValue: true,
    });
  };

  //handle the operator click and update the display value
  const handleEqualClick = () => {
    let result = 0;
    switch (calculatorState.operator) {
      case "+":
        result =
          parseFloat(calculatorState.firstValue) +
          parseFloat(calculatorState.secondValue);
        break;
      case "-":
        result =
          parseFloat(calculatorState.firstValue) -
          parseFloat(calculatorState.secondValue);
        break;
      case "*":
        result =
          parseFloat(calculatorState.firstValue) *
          parseFloat(calculatorState.secondValue);
        break;
      case "/":
        result =
          parseFloat(calculatorState.firstValue) /
          parseFloat(calculatorState.secondValue);
        break;
      default:
        break;
    }
    setCalculatorState({
      ...calculatorState,
      displayValue: result.toString(),
      firstValue: result.toString(),
      operator: "",
      waitingForSecondValue: false,
    });
  };

  //handle clear button click and reset the calculator
  const handleClearClick = () => {
    setCalculatorState({
      displayValue: "",
      operator: "",
      firstValue: "",
      waitingForSecondValue: false,
      secondValue: "",
    });
  };

  return (
    <>
      <div className="calculator-container">
        <section className="output-section">
          <div className="output-container">
            <h1>{calculatorState.displayValue}</h1>
          </div>
        </section>
        <section className="input-section">
          <div className="number-grid">
            {numberButtons.map((button, i) => (
              <CalculatorButton
                key={i}
                value={button}
                setValue={handleNumberClick}
              />
            ))}
            <CalculatorButton value="=" setValue={handleEqualClick} />
            <CalculatorButton value="C" setValue={handleClearClick} />
          </div>
          <div className="operator-grid">
            {operatorButtons.map((button, i) => (
              <CalculatorButton
                key={i}
                value={button}
                setValue={handleOperatorClick}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
