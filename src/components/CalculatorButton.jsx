export const CalculatorButton = (props) => {

  const handleClick = (value) => {
    console.log(value);
    props.setValue(value);
  };

  return (
    <button
      className="calculator-button"
      onClick={() => handleClick(props.value)}
    >
      {props.value}
    </button>
  );
};
