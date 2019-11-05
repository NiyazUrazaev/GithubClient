import React from "react";
import "./App.css";

const App = ({counter, name, increment, decrement, reset}) => (
  <div>
    <div>{name}</div>
    <div>{counter}</div>
    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => decrement()}>decrement</button>
    <button onClick={() => reset()}>reset</button>
  </div>
);
export default App;
