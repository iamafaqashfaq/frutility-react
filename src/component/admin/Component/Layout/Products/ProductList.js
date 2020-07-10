import React, { Component } from 'react'
import { getProductImage } from '../Requests/RequestPayloads'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 image: null
        }
    }

    downloadImage() {
        const respone = getProductImage(3)
        respone.then(res => {
            console.log(res)
            return res.config.url
        }).then(alldata => {
            this.setState({image: alldata})
        })
    }

    render() {
        return (
            <div onClick={() => this.downloadImage()}>
                Hello Click Me
                <img src={this.state.image} alt="Here is ima" height="100" width="50"/>
            </div>
        )
    }
}

export default ProductList
