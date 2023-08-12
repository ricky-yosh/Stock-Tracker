import { useState } from 'react'
import StockColumn from './StockColumn';
import StockColumnData from './StockColumnData';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// O1JL0G5KHFREZKEY
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=O1JL0G5KHFREZKEY

  return (
    <>
      <div>
        <div className='full-width-card text-center'>
          <input
            type="text"
            placeholder="Search..."
          />
          <h1>AAPL</h1>
          <p>$179.80</p>
        </div>
        <div className='full-width-card text-center'>
          <h3>News:</h3>
          <p>News</p>
        </div>
        <div className='full-width-card horizontal-items'>
          <div className='stock-column'>
            <h2 className='column-header'>Valuation</h2>
            <hr />
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Maket Cap:</h6>
              <p className='row-title'>$2.27t</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>PE (TTM|FWD):</h6>
              <p className='row-title'>31.62 | 27.03</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Price To Sales (TTM):</h6>
              <p className='row-title'>9.14</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>EV to EBITDA (TTM):</h6>
              <p className='row-title'>18.55</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Price to Book (TTM):</h6>
              <p className='row-title'>11.05</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Free Cash Flow Yield (TTM):</h6>
              <p className='row-title'>%2.52</p>
            </div>
          </div>
          <div className='stock-column'>
            <h2 className='column-header'>Quality</h2>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Piotroski Score:</h6>
              <p className='row-title'>7</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Quality:</h6>
              <p className='row-title'>High</p>
            </div>
          </div>
          <div className='stock-column'>
            <h2 className='column-header'>Margins & Growth</h2>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Profit Margin:</h6>
              <p className='row-title'>33.30%</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Operating Margin (TTM):</h6>
              <p className='row-title'>41.40%</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Quarterly Earnings (YoY):</h6>
              <p className='row-title'>10.40%</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Quarterly Revenue (YoY):</h6>
              <p className='row-title'>7.10%</p>
            </div>
          </div>
          <div className='stock-column'>
            <h2 className='column-header'>Balance</h2>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Cash:</h6>
              <p className='row-title'>$104.43b</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Debt:</h6>
              <p className='row-title'>$48.21b</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Net:</h6>
              <p className='row-title'>$56.22b</p>
            </div>
          </div>
          <div className='stock-column'>
            <h2 className='column-header'>Dividend</h2>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Dividend Yield:</h6>
              <p className='row-title'>0.89%</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Payout Ratio</h6>
              <p className='row-title'>%28.82</p>
            </div>
            <div className="horizontal-items align-center space-between">
              <h6 className='row-title'>Payout Date:</h6>
              <p className='row-title'>Jun 8, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
