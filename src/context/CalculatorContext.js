import React, { useState } from "react";

export const CalculatorContext = React.createContext({});

export const CalculatorProvider = (props) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
};
