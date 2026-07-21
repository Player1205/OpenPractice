import { useState } from 'react';

function IncDec() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1> 
      <button onClick={() => setCount(count + 1)}>
        Add
      </button> 
      <br />
      <button onClick={() => setCount(Math.max(0, count - 1))}>
        Subtract
      </button>
    </div>
  );
}

export default IncDec;