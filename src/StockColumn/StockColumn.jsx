import React from 'react';

const StockColumn = ({ title, items, index}) => {
    return (
        <div className='stock-column' key={index}>
            <h2 className='column-header'>{title}</h2>
            {items.map(items => (
                <>
                    <hr />
                    <div className="horizontal-items align-center space-between" key={items.label}>
                        <h6 className='row-title'>{items.label}</h6>
                        <p className='row-value'>{items.value}</p>
                    </div>
                </>
            ))}
      </div>
    );
};

export default StockColumn;