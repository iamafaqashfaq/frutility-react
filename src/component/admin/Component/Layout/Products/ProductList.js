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
        const respone = getProductImage(4)
        respone.then(res => {
            this.setState({image: res.data[0]})
        })
    }

    render() {
        const renderdata = "data:image/png;base64,"+this.state.image
        return (
            <div onClick={() => this.downloadImage()}>
                Hello Click Me
                <img src={renderdata} alt="Here is ima" height="100" width="50"/>
            </div>
        )
    }
}

export default ProductList
