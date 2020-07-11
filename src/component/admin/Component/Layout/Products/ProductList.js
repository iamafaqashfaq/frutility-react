import React, { Component } from 'react'
import { getProductMin } from '../Requests/RequestPayloads'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }
    componentWillMount() {
        this.fetchProducts()
    }

    componentDidMount() {
        this.fetchProducts()
    }

    fetchProducts() {
        const response = getProductMin()
        response.then(res => {
            this.setState({ ...this.state, products: res.data })
        }).catch(err => console.error(err))
    }

    render() {
        return (
            <div className="row mt-3">
                {this.state.products.map(product => {
                    return (
                        <div className="col-4 h-75">
                            <div className="card" key={product.id}>
                                <img src={"data:image/jpeg;base64," + product.imageBytes}
                                    alt="Product" className="card-img-top img-fluid img-thumbnail h-50" />
                                <div className="card-body">
                                    <div className="card-title text-center"><h5>{product.name}</h5></div>
                                    <div className="card-text overflow-hidden"><p><b>Description:</b><br />{product.description}</p></div>
                                </div>
                                <div className="card-footer bg-white">
                                    <small className="text-muted">Vendor: {product.vendor}</small>
                                    <button className="btn btn-outline-success float-right">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProductList
