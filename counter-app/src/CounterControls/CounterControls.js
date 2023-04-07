import React from "react";
import "./CounterControls.css";

const CounterControls = (props) => {
  return (
    <div>
      <button onClick={props.increment}>Increase</button>
      <button onClick={props.decrement}>Decrease</button>
      <button onClick={props.clear}>Clear</button>
    </div>
  );
};

export default CounterControls;
