import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5); // it is array, so const does not mean that its content can't be changed

  const increaseValue = () => {

    /* 
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
     */
    // if the button is pressed now, still the value will be increased by 1 -> it will be = 6
    // All the updates that need to be sent in the UI and the variables in `useState` are sent in batches. Now, due to Fiber, we get more control over batches through the diffing algorithm.

    // but still if we want to update value as the above same way 
    // setCounter(counter + 1); // first this can work but let's do it properly

    // setCounter(() => { }) // we get a Callback in setCounter like this, it accepts a callback
    setCounter((prevCounter) => prevCounter + 1) // prevCounter gives the existing state, prevCounter is the last updated state of the variable, which is fetched again from it
    // setCounter((prevCounter) => {return prevCounter + 1}) // same as above

    setCounter(prevCounter => prevCounter + 1) // first the value is get by callback and then value is updated, just propagation of state
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // now these are not bunch of requests, all are separate

    // setCounter(counter + 1); // if this line is uncommented, then again the value will be incremented by one only 
  }

  const decreaseValue = () => {

    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={increaseValue}
      >Increase Value {counter}</button>

      <br />
      <br />

      <button
        onClick={decreaseValue}
      >Decrease Value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
