import { useState } from "react";


function CalculatorApp() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);
  
    const handleAddition = () => {
        setResult(num1 + num2);
    };

    const handleSubtraction = () => {
        setResult(num1 - num2);
    };
    
    const handleMultiplication = () => {
        setResult(num1 * num2);
    };
    
    const handleDivision = () => {
        if (num2 !== 0) {
            setResult(num1 / num2);
        } else {
            setResult("Error: Division by zero");
        }
    };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <br />
      <button onClick={handleAddition}>Add</button>
      <br />
      <button onClick={handleSubtraction}>Subtract</button>
      <br />
      <button onClick={handleMultiplication}>Multiply</button>
      <br />
      <button onClick={handleDivision}>Divide</button>
      <br />
      <h1>Result: {result}</h1>
    </div>
  );
}

export default CalculatorApp;