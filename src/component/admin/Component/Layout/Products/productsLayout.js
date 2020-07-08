import React, { Component } from 'react'
import ProductCreate from './productCreate';
import ProductList from './productList';

class ProductsLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container ml-3">
                <ProductCreate/>
                <ProductList/>
            </div>
        )
    }
}

export default ProductsLayout
