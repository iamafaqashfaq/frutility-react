import React, { Component } from 'react'
import { getProducts } from '../Requests/RequestPayloads'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        }
    }
    componentWillMount() {
        this.fetchProducts()
    }

    fetchProducts() {
        const response = getProducts()
        response.then(res => {
            this.setState({products: res.data})
        }).catch(err => console.error(err))
    }

    componentDidMount(){
        console.log(this.state.products)
    }

    render() {
        const renderdata = "data:image/png;base64," + this.state.products[0].imageBytes[0]
        return (
            <div>
                Hello Click Me
                <img src={renderdata} alt="Here is ima" height="100" width="50" />
                {/* <h1>{this.state.products['0'].['id']}</h1> */}
        {/* <p>{this.state.products[0].id}</p> */}
            </div>
        )
    }
}

export default ProductList
