import { useState } from 'react';

function IncDec() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  }
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } 
    
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}><i>The counter is at: {count}</i></h2>
      <div>
        <button onClick={increment} style={{ fontSize: '2rem', padding: '1rem 2rem', marginRight: '1rem', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>+</button>
        <button onClick={decrement} style={{ fontSize: '2rem', padding: '1rem 2rem', borderRadius: '5px', backgroundColor: '#f44336', color: 'white', border: 'none' }}>-</button>
      </div>
    </div>
  );
}
export default IncDec;