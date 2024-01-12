import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { getBaseUrl } from "./utils"

function App() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState(null)

  function getMesasge() {
    fetch(`${getBaseUrl()}/hello`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} - ${res.statusText}`)
        }
        return res.text()
      })
      .then((text) => {
        setMsg(text)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>{msg === null ? "Vite + React" : msg}</h1>
      <button onClick={getMesasge}>Fetch a message</button>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR!
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
