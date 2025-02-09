import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      {/* style={{color: white}}; syntax, nothing else */}
      {/* style={{expression}}; no need to place extra{} for writing expression because {} is already present. */}

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="bg-white flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl shadow-lg">

          <button
            onClick={() => setColor("red")}
            // we can't write like this:
            // onClick(setColor("red")}; // because onClick is expecting function, we can do so onClick{setColor} but we have to set value
            // so when we pass parameter, setColor returns something but onClick don't need that, so we have to pass a function
            // that's why we passed a callback function, which is a function, and inside that function we are calling 
            // another function (setColor)
            className="outline-none text-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "red" }}
          >Red</button>

          <button
            onClick={() => setColor("green")}
            className="outline-none text-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "green" }}
          >Green</button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none text-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "blue" }}
          >Blue</button>

          <button
            onClick={() => setColor("olive")}
            className="outline-none text-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "olive" }}
          >Olive</button>

          <button
            onClick={() => setColor("gray")}
            className="outline-none text-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "gray" }}
          >Gray</button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none text-black px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none text-black px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "pink" }}
          >Pink</button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none text-black px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "purple" }}
          >Purple</button>

          <button
            onClick={() => setColor("lavender")}
            className="outline-none text-black px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "lavender" }}
          >Lavender</button>

          <button
            onClick={() => setColor("white")}
            className="outline-none text-black px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "white" }}
          >White</button>

          <button
            onClick={() => setColor("black")}
            className="outline-none text-white px-4 py-2 rounded-full shadow-lg cursor-pointer"
            style={{ backgroundColor: "black" }}
          >Black</button>

        </div>
      </div>

    </div>
  )
}

export default App
