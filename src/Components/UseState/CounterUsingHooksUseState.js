// Use rfce snippet to create a functional component
// The ES7 React Snippet lets you do that (Install extension first)
import React, { useState } from "react";

function CounterUsingHooksUseState() {
  // Use Array destructuring and useState
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default CounterUsingHooksUseState;
