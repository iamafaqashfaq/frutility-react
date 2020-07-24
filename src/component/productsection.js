import React from 'react'
import Sidebar from "./sidebar"

export default function productsection() {
    return (
        <div id="product-section" className="bg-pan-top">
            <div className="jumbotron product-highlight 
                animate__animated animate__fadeInDown 
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
            <div className="row ml-2 mr-2">
                <div className="col-md-2 col-lg-2 d-none 
                    d-sm-none d-md-block">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-lg-10">
                    <div>
                        <h3 className="text-center 
                            tracking-in-contract-bck">
                            Featured Products
                        </h3>
                        <div className="row mt-3 justify-content-center">
                            <div className="col-md-2 col-lg-2 
                            animate__animated animate__fadeInDown 
                            products m-5">
                                <div className="productimg hvr-shrink"></div>
                                <p className="text-center">Logo</p>
                            </div>
                            <div className="col-md-2 col-lg-2 animate__animated
                             animate__fadeInDown products m-5">
                                <div className="productimg hvr-shrink"></div>
                                <p className="text-center">Logo</p>
                            </div>
                            <div className="col-md-2 col-lg-2 animate__animated 
                            animate__fadeInDown products m-5">
                                <div className="productimg hvr-shrink"></div>
                                <p className="text-center">Logo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}