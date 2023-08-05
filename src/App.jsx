import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // O1JL0G5KHFREZKEY
  const img = document.querySelector('img');
  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=O1JL0G5KHFREZKEY', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(response){
      console.log("error");
    });

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
      />
      <div>
        <img src="" alt="cats" />
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
