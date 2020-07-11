import React, { Component } from 'react'
import { getProducts, getSubcategory } from '../Requests/RequestPayloads'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../hoc/auxillary'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            modalShow: false,
            selectedProduct: [],
            subcategoriesData: []
        }
    }

    componentDidMount() {
        this.fetchProducts()
    }

    componentDidUpdate() {
        this.fetchProducts()
    }
    fetchSubcategory() {
        const response = getSubcategory();
        response.then(res => {
            this.setState({ subcategoriesData: res.data })
        }).catch(err => console.error(err))
    }
    fetchProducts() {
        const response = getProducts()
        response.then(res => {
            this.setState({ ...this.state, products: res.data })
        }).catch(err => console.error(err))
    }
    async showModal(product) {
        await this.setState({ selectedProduct: product })
        this.fetchSubcategory()
        console.log(this.state.selectedProduct)
        this.setState({ modalShow: !this.state.modalShow })
    }
    hideModal(){
        this.fetchProducts()
        this.setState({modalShow: false})
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.modalShow} size="lg" onHide={() => this.hideModal()}>
                    <Modal.Header>
                        Product Details
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="Name">Product Name</label>
                                <input type="text" className="form-control"
                                    defaultValue={this.state.selectedProduct.name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Description">Description</label>
                                <textarea type="text" cols="30" rows="5" className="form-control"
                                    defaultValue={this.state.selectedProduct.description} />
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-4 col-md-4">
                                    <label htmlFor="Vendor">Vendor</label>
                                    <input type="text" className="form-control"
                                        defaultValue={this.state.selectedProduct.vendor} />
                                </div>
                                <div className="form-group col-sm-4 col-md-4">
                                    <label htmlFor="Stock">Stock</label>
                                    <input type="text" className="form-control"
                                        defaultValue={this.state.selectedProduct.stock} />
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="Price">Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className="form-control"
                                            defaultValue={this.state.selectedProduct.price} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="BeforeDiscount">Before Discount</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className="form-control"
                                            defaultValue={this.state.selectedProduct.priceBeforeDiscount} />
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="Shipping">Shipping Charges</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className="form-control"
                                            defaultValue={this.state.selectedProduct.shippingCharges} />
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="weight">Package Weight</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">KG</div>
                                        </div>
                                        <input type="text" className="form-control"
                                            defaultValue={this.state.selectedProduct.packageWeight} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="Subcategory">Subcategory</label>
                                <select className="custom-select" name="subcategoryselect">
                                    {this.state.subcategoriesData.map(subcategory => {
                                        return (
                                            <option key={subcategory.id} value={subcategory.id}>
                                                {subcategory.subcategoryName}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>

                            <label htmlFor="Image">Update Images</label><br />

                            <div className="row">
                                {
                                    (!this.state.selectedProduct.imageBytes) ?
                                        <p>Loading...</p> :
                                        (<div className="col-4 col-sm-4 col-md-4">
                                            <img src={"data:image/jpeg;base64," +
                                                this.state.selectedProduct.imageBytes[0]}
                                                className="img-thumbnail" alt="img1" />
                                            <input type="file" className="form-control-file mb-1" />
                                        </div>)
                                }

                                {
                                    (!this.state.selectedProduct.imageBytes) ?
                                        <p>Loading...</p> :
                                        (<div className="col-4 col-sm-4 col-md-4">
                                            <img src={"data:image/jpeg;base64," +
                                                this.state.selectedProduct.imageBytes[1]}
                                                className="img-thumbnail img-fluid" alt="img2" />
                                            <input type="file" className="form-control-file mb-1" />
                                        </div>)
                                }

                                {
                                    (!this.state.selectedProduct.imageBytes) ?
                                        <p>Loading...</p> :
                                        (<div className="col-4 col-sm-4 col-md-4">
                                            <img src={"data:image/jpeg;base64," +
                                                this.state.selectedProduct.imageBytes[2]}
                                                className="img-thumbnail img-fluid" alt="img1" />
                                            <input type="file" className="form-control-file mb-1" />
                                        </div>)
                                }
                            </div>
                            <div className="form-group col-sm-6 col-md-6 mt-3">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input"
                                        defaultChecked={this.state.selectedProduct.availability} id="avail" />
                                    <label className="custom-control-label"
                                        htmlFor="avail"><h6>Availability</h6></label>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="form-group">
                            <button className="btn btn-outline-secondary mr-2"
                                onClick={() => this.hideModal()}><b>Exit</b></button>
                            <button className="btn btn-outline-success pl-5 pr-5 mr-5"
                                onClick={() => this.create()}>
                                <b>Save</b>
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <div className="row mt-3">
                    {this.state.products.map(product => {
                        return (
                            <div className="col-4 my-2" key={product.id}>
                                <div className="card h-100">
                                    <img src={"data:image/jpeg;base64," + product.imageBytes[0]}
                                        alt="Product" className="card-img-top img-fluid img-thumbnail h-50" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h5>{product.name}</h5>
                                        </div>
                                        <div className="card-text">
                                            <p>
                                                <b>Vendor: </b> {product.vendor}
                                            </p>
                                            <p><b>Price:</b> {product.price}</p>
                                            <p><b>Stock:</b> {product.stock}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-white">
                                        <small className="text-muted">
                                            {product.availability ? "Available" : "Out of Stock"}
                                        </small>
                                        <button onClick={() => this.showModal(product)}
                                            className="btn btn-outline-success float-right">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Aux>
        )
    }
}

export default ProductList
