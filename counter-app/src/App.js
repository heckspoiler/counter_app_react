import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import "./App.css";
import CounterControls from "./CounterControls/CounterControls";
import "./CounterControls/CounterControls.css";

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
      <div className="container">
        <CounterDisplay count={count} />
        <CounterControls
          increment={increment}
          decrement={decrement}
          clear={clear}
        />
      </div>

      <h2 className="hehehe">hehehehe</h2>
    </div>
  );
}

export default App;
