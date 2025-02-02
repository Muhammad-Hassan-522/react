import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // is responsible to change the state, change does not means that your values are updated, this change is propagated to your UI/DOM 
  // useState(default value in a variable)
  // useState(true), useState(false), useState(''), useState('hassan'), useState([]), useState({})

  // we get two things from useState in the form of array
  // const [value, function] = useState(5); // 5 -> counter default value 
  let [counter, setCounter] = useState(5);
  // setCounter function is responsible to update the variable counter
  // counter's default is now = 5

  // let counter = 5; // this variable can be updated but will never propagate in UI, so comment it

  const increaseValue = () => {
    // counter = counter + 1;
    // setCounter(counter);

    if (counter < 20) { // homework: counter value cannot be exceed 20
      setCounter(counter + 1);
    }
  }

  const decreaseValue = () => {
    // now no need to do getElementById, getElementsByClassName, etc, react will react and update the value throughout the UI
    if (counter > 0) { // homework: counter value cannot be negative
      setCounter(counter - 1);
    }
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
