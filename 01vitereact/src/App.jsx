import Chai from "./chai"

function App() {

  const username = "chai aur code"

  return (
    <> {/* JSX fragment */}
      <p>Evaluated expression {username}, means here we can only write the final outcome</p>
      <p>Why we can't write expression like if (){} here because (the reason is given in main.jsx ReactElementAccToReact)</p>
      <h1>chai aur react with vite | Muhammad Hassan</h1>
      <Chai />
      <p>1. When making components, always capitalize function name.</p>
      <p>2. File extension should be .jsx if html is being returned, because vite force us to do that.</p>
      <p>3. Component (function) should return only 1 element (here that is fragment)</p>
      <p>4. Best practice is that file name should also be capitalized.</p>
    </>
  )
}

export default App
