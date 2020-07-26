import React from 'react'
import Jumbotron from './jumbotron/landingjumbo'
import TopSellingProducts from './topsellingproducts/topselling'
import FeaturedProducts from './featuredproducts/featuredproducts'
import './productsection.css'
import { Route } from 'react-router-dom'
import SubcategoryProducts from './subcategoryProduct/subcategoryProducts'

export default function productsection() {
    return (
        <div>
            <Route path="/" exact>
                <div id="product-section" className="bg-pan-top">
                    <Jumbotron />
                    <TopSellingProducts />
                    <hr />
                    <h4 className="text-center">Featured Products</h4>
                    <div className="row justify-content-center">
                        <FeaturedProducts />
                    </div>
                </div>
            </Route>
            <Route path="/subcategory/products/:id" component={SubcategoryProducts}/>
        </div>
    )
}