import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20){
      // setCounter((prevCounter) => prevCounter+1);
      // setCounter((prevCounter) => prevCounter+1);
      // setCounter((prevCounter) => prevCounter+1);
      // setCounter((prevCounter) => prevCounter+1);


      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
    }
  }
  const decreaseValue = () => {
    if(counter > 0){
      setCounter(counter-1); 
    }
  }
  return (
    <>
       <h1>HELLO JI</h1>
       <h6>The range of counter is 0-20</h6>
       <h2>Counter value : {counter}</h2>
       <button onClick={addValue}>Add Value : {counter}</button>
       <br />
       <button onClick={decreaseValue}>Decrease Value : {counter}</button>

       <p>Footer: {counter}</p>
    </>
  )
}

export default App
