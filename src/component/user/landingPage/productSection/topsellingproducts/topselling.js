import React from 'react'

const topselling = () => {
    return (
        <div>
            <h3 className="text-center 
                            tracking-in-contract-bck mb-5">
                Top Selling Products
                        </h3>
            <div className="row justify-content-center">
                <div className="col-md-2 col-lg-2
                            animate__animated animate__fadeInDown 
                            products">
                    <div className="productimg hvr-shrink"></div>
                    <p className="text-center product-name">Logo</p>
                    <p className="text-center"><b>Price</b></p>
                </div>
                <div className="col-md-2 col-lg-2 animate__animated
                             animate__fadeInDown products">
                    <div className="productimg hvr-shrink"></div>
                    <p className="text-center product-name">Logo</p>
                    <p className="text-center"><b>Price</b></p>
                </div>
                <div className="col-md-2 col-lg-2 animate__animated 
                            animate__fadeInDown products">
                    <div className="productimg hvr-shrink"></div>
                    <p className="text-center product-name">Logo</p>
                    <p className="text-center"><b>Price</b></p>
                </div>
            </div>
        </div>
    )
}

export default topselling;
