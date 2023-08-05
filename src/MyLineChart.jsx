import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const MyLineChart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=O1JL0G5KHFREZKEY');
    const result = await response.json();

    const formattedData = Object.keys(result['Time Series (1min)']).map(key => ({
      time: key,
      open: parseFloat(result['Time Series (1min)'][key]['1. open']),
      high: parseFloat(result['Time Series (1min)'][key]['2. high']),
      low: parseFloat(result['Time Series (1min)'][key]['3. low']),
      close: parseFloat(result['Time Series (1min)'][key]['4. close']),
      volume: parseInt(result['Time Series (1min)'][key]['5. volume'], 10),
    }));

    setData(formattedData);
  };

  return (
    <div>
      <button onClick={fetchData}>Load Data</button>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="close" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis domain={[181, 182.5]}/>
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default MyLineChart;
