import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter Application</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
export default App;
