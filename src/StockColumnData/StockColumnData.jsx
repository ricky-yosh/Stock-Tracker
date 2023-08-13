import React from 'react';

const StockColumnData = [
    {
      title: 'Valuation',
      items: [
        { label: 'Market Cap', value: '$2.27t' },
        { label: 'PE (TTM)', value: '31.62' },
        { label: 'PE (FWD)', value: '27.03' },
        { label: 'Price To Sales (TTM)', value: '9.14' },
        { label: 'EV to EBITDA (TTM)', value: '18.55' },
        { label: 'Price to Book (TTM)', value: '11.05' },
        { label: 'Free Cash Flow Yield (TTM)', value: '%2.52' }
      ]
    },
    {
      title: 'Quality',
      items: [
        { label: 'Piotroski Score', value: '7' },
        { label: 'Quality', value: 'High' }
      ]
    },
    {
      title: 'Margins & Growth',
      items: [
        { label: 'Profit Margin', value: '33.30%' },
        { label: 'Operating Margin (TTM)', value: '41.40%' },
        { label: 'Quarterly Earnings (YoY)', value: '10.40%' },
        { label: 'Quarterly Revenue (YoY)', value: '7.10%' }
      ]
    },
    {
      title: 'Balance',
      items: [
        { label: 'Cash', value: '$104.43b' },
        { label: 'Debt', value: '$48.21b' },
        { label: 'Net', value: '$56.22b' }
      ]
    },
    {
      title: 'Dividend',
      items: [
        { label: 'Dividend Yield', value: '0.89%' },
        { label: 'Payout Ratio', value: '%28.82' },
        { label: 'Payout Date', value: 'Jun 8, 2023' }
      ]
    }
];  
export default StockColumnData;