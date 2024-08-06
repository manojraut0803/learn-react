import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  // let count = 10;

  function addValue() {
    if (count >= 14) {
      return;
    }

    // Intw: what is the o/p 
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // Ans: useState Batche || same work again and again (setCount)
    // setCout(prevCount => prevCount + 1)

    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)

    console.log(count);
  }

  function removeValue() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
    console.log(count);
  }

  return (
    <>
      <h1>React Counter APP</h1>
      <p>Counter Value: {count}</p>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
