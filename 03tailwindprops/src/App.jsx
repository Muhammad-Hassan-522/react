import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let newObj = {
    username: "Hassan",
    age: 20
  }

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-6'>Tailwind Test</h1>

      {/* pexels.com */}
      {/* <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.pexels.com/photos/30450013/pexels-photo-30450013/free-photo-of-chicago-skyline-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
            <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
              places to do just that.
            </p>
          </div>
        </div>
      </div> */}

      {/* <Card channel = "chaiaurocode" myObj = {username: "hassan"}/>  */} {/* Error */}
      {/* <Card channel = "chaiaurocode" myArr = [1, 2, 3] /> */} {/* Error */}

      {/* <Card channel="chaiaurocode" myObj={newObj} myArr={newArr} />  */} {/* Variable, so it must be passed in curly braces */}

      <Card username="chaiaurcode" btnText="Click me" />
      <Card username="hitesh" btnText="Visit me" />
      <Card username="hitesh" />

    </>
  )
}

export default App
