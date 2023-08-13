import React from 'react';

const StockColumn = ({ title, items }) => {
    return (
        <div className='stock-column'>
            <h2 className='column-header'>{title}</h2>
            {items.map(items => (
                <>
                    <hr />
                    <div className="horizontal-items align-center space-between" key={items.label}>
                        <h6 className='row-title'>{items.label}</h6>
                        <p className='row-title'>{items.value}</p>
                    </div>
                </>
            ))}
      </div>
    );
};

export default StockColumn;