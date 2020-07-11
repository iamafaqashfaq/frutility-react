import React, { Component } from 'react'
import { getProducts } from '../Requests/RequestPayloads'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 products: [],
                 image: null
        }
    }
    componentDidMount(){
        const response = getProducts()
        response.then(res => {
            // console.log(res)
            this.setState({products: res.data})
            console.log(this.state.products[0].imageBytes)
            this.setState({image: this.state.products[2].imageBytes})
            console.log(this.state.products['0'].id)
        })
    }

    render() {
        const renderdata = "data:image/png;base64,"+this.state.image
        return (
            <div>
                Hello Click Me
                <img src={renderdata} alt="Here is ima" height="100" width="50"/>
                {/* <h1>{this.state.products['0'].['id']}</h1> */}
            </div>
        )
    }
}

export default ProductList
