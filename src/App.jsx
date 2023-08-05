import { useState } from 'react'
import MyLineChart from './MyLineChart';
import StockColumn from './StockColumn/StockColumn';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// O1JL0G5KHFREZKEY
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=O1JL0G5KHFREZKEY

  const BalanceColumn = {
    Title: "Balance",
    Data: [
      { header: "Cash", value: "$3313.32" },
      { header: "Debt", value: "$49.00" },
      { header: "Net", value: "$3212.00" },
    ],
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
      />
      <div>
        <h1>VOO</h1>
        <p>$300.12</p>
        <div>
          <h3>News:</h3>
          <p>News</p>
        </div>
        <StockColumn data={BalanceColumn}></StockColumn>
      </div>
    </>
  );
}

export default App
