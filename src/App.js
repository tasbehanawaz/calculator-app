import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  function calculate(operation) {
    const inputValue = Number(inputRef.current.value);
    switch (operation) {
      case '+':
        setResult((prevResult) => prevResult + inputValue);
        break;
      case '-':
        setResult((prevResult) => prevResult - inputValue);
        break;
      case '*':
        setResult((prevResult) => prevResult * inputValue);
        break;
      case '/':
        if (inputValue === 0) {
          alert("Cannot divide by zero");
          return;
        }
        setResult((prevResult) => prevResult / inputValue);
        break;
      default:
        console.error("Invalid operation");
    }
  }

  function resetInput() {
    inputRef.current.value = "";
  }

  function resetResult() {
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>{result}</p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={() => calculate('+')}>add</button>
        <button onClick={() => calculate('-')}>subtract</button>
        <button onClick={() => calculate('*')}>multiply</button>
        <button onClick={() => calculate('/')}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
