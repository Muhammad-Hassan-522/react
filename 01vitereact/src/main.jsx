import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>Custom App !</h1>
    </>
  )
}

// whatever written in this MyApp, at the end of the day it is parsed like this custom reactElement, so it should also be displayed
const ReactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const AnotherElement = (
  <a href="https://www.google.com" target="_blank">Visit Google</a>
) // in JSX, it is an object

/*
  Under the hood, JSX gets converted to a JavaScript object that represents a React element.
  The above JSX is transformed into:

  // This is how React Element is created:
  const anotherElement = React.createElement(
    "a",
    { href: "https://www.google.com", target: "_blank" },
    "Visit Google"
  );
*/

const anotherUsername = "chai aur react"

// ReactElement is not working so we have to create according to the react
const ReactElementAccToReact = React.createElement(
  'a', // tag name
  {href: 'https://www.google.com', target: '_blank'}, // props
  'click me to visit google', 
  // variables are injected in the end after all the tree is made
  anotherUsername // evaluated expression
  /* 
    since we can't write if else etc in objects that's why we can't write expressions in return statement's {}, here only evaluated expression
    can come.
    As we have already seen anotherUsername value is displayed not anotherUsername.
  */
)

createRoot(document.getElementById('root')).render(
  
    // <App />

    // <MyApp /> 

    // MyApp() // basically MyApp is a function so we can write like this too
  
    /* 
    <ReactElement />
      // ReactElement is an object if we write the above syntax, it's just like writing this ReactElement() 

    ReactElement() 
      // definitely wrong because ReactElement is not a function
      
      // objects can be called just by writing their names, so let's try it
      ReactElement // again not working
        // it does not work because it is just a plain JS object but it expects  function component, class component or a  built-in HTML element and since the render function is written by someone not by us so it has some predefined syntax that's why it is unable to display render it.
   */
  
    // AnotherElement

    // ReactElementAccToReact



    <App />
)
