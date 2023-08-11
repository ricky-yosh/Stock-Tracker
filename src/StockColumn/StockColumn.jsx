import React from 'react';

const StockColumn = ({ data }) => {
    const title = data.Title;
    const list = data.Data;

    return (
        <div>
        <h1>{title}</h1>
        {list.map((item, index) => (
            <div key={index}> 
            {item.header} ----------- {item.value}
            </div>
        ))}
        </div>
    );
};

export default StockColumn;