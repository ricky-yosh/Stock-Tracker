import React from 'react';

const StockColumn = ({ data }) => {
    const header = data.Header;
    const list = data.Data;
    return (
        <div className='stock-column'>
            <h2 className='column-header'>{header}</h2>
            {list.map((item,index) => (
                <>
                    <hr />
                    <div className="horizontal-items align-center space-between">
                        <h6 className='row-title'>{item.title}</h6>
                        <p className='row-title'>{item.data}</p>
                    </div>
                </>
            ))}
        </div>
    );
};

export default StockColumn;