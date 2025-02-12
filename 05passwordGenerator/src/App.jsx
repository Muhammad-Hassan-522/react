import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook is used as a variable
  const passwordRef = useRef(null)

  // useCallback try to memorize the function as much as it can (maybe the whole function, maybe parts/threads of that function)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword]) // add dependencies for which you want to optimize

  /* const copyPasswordToClipboard = () => {
    // can be made like this but let's say we want to optimize so use the useCallback hook
  } */

  const copyPasswordToClipboard = useCallback(() => {
    // the below line is used to just show the user that the this text has been selected, a better UI experience
    passwordRef.current?.select() // optional selection because current value might be null

    // another optimzation can be a selection a range of text // optional selection because it might contain null value
    passwordRef.current?.setSelectionRange(0, 80); // will select first 80 characters, give any range according to your need

    window.navigator.clipboard.writeText(password)
  }, [password])

  /**
   * passwordGenerator() 
   * Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
   * we do not control rendering it is controlled by react (setValue, setState)
   * so use another hook: useEffect, similar to useCallback
   */

  // whenever the page loads, it is called at first time
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  // add dependencies for which there can be some change in them so that it (useEffect) can re-run

  return (
    <>
      <div
        className='text-orange-500 bg-gray-800 w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 shadow-md'>

        <h1 className='text-white text-center text-3xl my-3'>Password Gernerator</h1>

        <div
          className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-500'
          >copy</button>

        </div>

        <div className='flex text-sm gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={10}
              max={80}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              // onChange={(prev) => { !prev }}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
