import React, { useState, useEffect } from "react";
import "./effects.css";

function UsingUseEffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(45);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count, age]);

  return (
    <div>
      <div className="valueHolder">
        <h3>The value of count is: {count}</h3>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}

export default UsingUseEffect;
