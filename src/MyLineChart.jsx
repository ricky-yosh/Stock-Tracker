import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const MyLineChart = () => {
    // O1JL0G5KHFREZKEY
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

    const data = [
      { time: "2023-08-04 18:20:00", close: 181.8700 },
      { time: "2023-08-04 18:21:00", close: 181.8600 }
    ];
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="close" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default MyLineChart;