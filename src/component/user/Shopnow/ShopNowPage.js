import React from 'react'
import Featuredproducts from './../landingPage/productSection/featuredproducts/featuredproducts';

const ShopNowPage = () => {
    return (
        <div className="container">
            <h5 className="p-4 rounded-pill bg-success text-white text-center">
                Best Quality Products From Our Trustworthy Vendors
            </h5>
            <div className="row justify-content-center">
                <Featuredproducts />
            </div>
        </div>
    )
}

export default ShopNowPage;
