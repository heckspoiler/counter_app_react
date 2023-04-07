import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import "./App.css";
import CounterControls from "./CounterControls/CounterControls";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const clear = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1 className="heading-main">Counter App</h1>
      <CounterDisplay count={count} />
      <CounterControls
        increment={increment}
        decrement={decrement}
        clear={clear}
      />
      <h1>hehehehe</h1>
    </div>
  );
}

export default App;
