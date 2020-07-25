import React from 'react'
import Sidebar from "../sidebar/sidebar"
import Jumbotron from './jumbotron/landingjumbo'
import TopSellingProducts from './topsellingproducts/topselling'
import FeaturedProducts from './featuredproducts/featuredproducts'

export default function productsection() {
    return (
        <div id="product-section" className="bg-pan-top">
            <Jumbotron/>
            <div className="row ml-2 mr-2">
                <div className="col-md-2 col-lg-2 d-none 
                    d-sm-none d-md-block">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-lg-10 top-selling">
                    <TopSellingProducts/>
                </div>
            </div>
            <hr/>
            <h4 className="text-center">Featured Products</h4>
            <div className="row justify-content-center">
                <FeaturedProducts/>
            </div>
        </div>
    )
}