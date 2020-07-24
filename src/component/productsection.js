import React from 'react'

export default function productsection() {
    return (
        <div id="product-section">
            <div className="jumbotron product-highlight animate__animated animate__backInRight">
                <div className="display-3 mb-4">Fresh Fruit 100% Organic</div>
                <p className="lead text-capitalize mb-3 ml-4">free pickup and delivery available</p>
                <button className="fruity-btn p-2 ml-4 mb-5 hvr-grow">Shop Now</button>
            </div>
            <div>
                <h3 className="text-center">Featured Products</h3>
            </div>
        </div>
    )
}