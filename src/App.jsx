import { useState } from 'react'
import StockColumn from './StockColumn';
import StockColumnData from './StockColumnData';
import Logo from './assets/logo.svg';

function App() {
  const [count, setCount] = useState(0)
// O1JL0G5KHFREZKEY
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=O1JL0G5KHFREZKEY

  return (
    <>
    <header>
      <img src={Logo} alt="Logo" />
      <h3>StoTrack</h3>
    </header>
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
          {StockColumnData.map(section => (
            <StockColumn key={section.title} title={section.title} items={section.items}></StockColumn>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
