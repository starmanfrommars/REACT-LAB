import React,{ useState } from 'react'


const App = () => {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increaseCount= () => {
    setCount(count+ step);
  };

  const decreaseCount= () => {
    setCount((prevCount) => Math.max(0, prevCount - step));
  };

  const resetCount= () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>Counter Application</h1>
      <h2>Count: {count}</h2>
      
      <div>
        <button onClick={increaseCount} style={styles.button}>+</button>
        <button onClick={decreaseCount} style={styles.button} disabled={count===0}>-</button>
        <button onClick={resetCount} style={styles.button}>Reset</button>
      </div>

      <div>
        <label>Step Value: </label>
        <input
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value)) || 1} min="1"
        style={styles.input}/>
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },

  button: {
    fontSize: "20px",
    margin: "5px",
    padding: "10px",
    cursor: "pointer"
  },

  input: {
    fontSize: "16px",
    margin: "10px",
    padding: "5px"
  }
}

export default App;