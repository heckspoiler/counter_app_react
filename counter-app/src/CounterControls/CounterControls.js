import React from "react";
import "./CounterControls.css";

const CounterControls = (props) => {
  return (
    <div classList="button-container">
      <button classList="buttons" onClick={props.increment}>
        Increase
      </button>
      <button classList="buttons" onClick={props.decrement}>
        Decrease
      </button>
      <button classList="buttons" onClick={props.clear}>
        Clear
      </button>
    </div>
  );
};

export default CounterControls;
