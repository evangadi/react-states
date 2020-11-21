import React, { useState } from "react";
import "./counter.css";

function CounterIncrementDecrement() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="valueHolder">
        <h3>The value of count is: {count}</h3>
      </div>
      <button onClick={() => setCount(0)}>Reset </button>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

export default CounterIncrementDecrement;
