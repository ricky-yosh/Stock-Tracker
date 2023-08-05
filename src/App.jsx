import { useState } from 'react'
import MyLineChart from './MyLineChart';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
      />
      <div>
        <MyLineChart></MyLineChart>
        <h1>VOO</h1>
        <p>$300.12</p>
        <h3>News:</h3>
        <p>News</p>
        <div>
          <h4>Valuation</h4>
          <div>
            <p>Market Cap:</p>
            <p>$130.02b</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
