import React from "react";
import "./CounterDisplay.css";

const CounterDisplay = (props) => {
  return (
    <div className="counter-display">
      <h1 className="heading-counter-display">Let's count some numbaz</h1>
      <h2 className="heading-sub">{props.count}</h2>
    </div>
  );
};

export default CounterDisplay;
