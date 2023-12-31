import './App.css'
import { useState } from 'react'

function App() {
  var [count, setCount] = useState(0)
  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    setCount(count - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>
        Click me to increase the state of the text above
      </button>
      <button onClick={decrease}>
        Click me to decrease the state of the text above
      </button>
    </>
  )
}

export default App
