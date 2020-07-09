import React, { Component } from 'react'
import ProductList from './ProductList'
import ProductCreate from './ProductCreate';

class ProductLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
                change: false 
        }
    }
    updateList(){
        this.setState({change: !this.state.change})
    }
    render() {
        return (
            <div className="container ml-3">
                <ProductCreate update={() => this.updateList()}/>
                <ProductList change={this.state.change}/>
            </div>
        )
    }
}

export default ProductLayout
