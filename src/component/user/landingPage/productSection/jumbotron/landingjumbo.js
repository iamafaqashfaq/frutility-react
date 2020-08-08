import React from 'react'

const landingjumbo = () => {
    return (
        <div className="jumbotron product-highlight 
                animate__animated animate__backInRight 
                d-none d-sm-none d-md-block">
            <div className="display-3 mb-4 
                    tracking-in-contract-bck">
                Fresh Fruit 100% Organic
            </div>
            <p className="lead text-capitalize 
                    mb-3 ml-4 tracking-in-expand">
                free pickup and delivery available
            </p>
            <button className="fruity-btn p-2 pl-4 pr-4 
                    ml-4 mb-5 hvr-grow">
                Shop Now
            </button>
        </div>
    )
}

export default landingjumbo;
