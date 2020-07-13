import React, { Component } from 'react'
import { getProducts, getSubcategory } from '../Requests/RequestPayloads'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../hoc/auxillary'
import axios from 'axios'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            modalShow: false,
            originalProduct: [],
            selectedProduct: [],
            subcategoriesData: [],
            createdata: {
                name: '',
                description: '',
                vendor: '',
                price: 0,
                beforeDiscount: 0,
                image1: null,
                image2: null,
                image3: null,
                shipping: 0,
                availability: false,
                stock: 0,
                weight: 0,
                subcategoryId: 1,
                imageNo1: false,
                imageNo2: false,
                imageNo3: false,
            },
            errors: {}
        }
        this.searchInput = React.createRef()
        this.subcategorySelect = React.createRef()
    }
    signal = axios.CancelToken.source()
    //On First load Fetch products to show 
    componentDidMount() {
        this.fetchProducts(this.signal)
    }
    // Destroy All Axios Requests
    componentWillUnmount() {
        this.signal.cancel('Cancelling All Product Requests')
    }
    componentDidUpdate(prevProps) {
        if (this.props.change !== prevProps.change) {
            this.fetchProducts(this.signal)
            console.log("Component Did Update")
        }
    }
    // Fetch Subcategories for Update Menu
    fetchSubcategory() {
        const response = getSubcategory();
        response.then(res => {
            this.setState({ subcategoriesData: res.data })
        }).catch(err => console.error(err))
    }
    //Method to fetch Products from server
    async fetchProducts(signal) {
        if (this.searchInput.current.value === '') {
            const response = getProducts(signal)
            response.then(res => {
                this.setState({ originalProduct: res.data, products: res.data })
            }).catch(err => console.error(err))
        }
    }
    //Show Bootstrap Modal and setting states to poulate it
    showModal(product) {
        this.setState({ selectedProduct: product, modalShow: !this.state.modalShow })
        this.fetchSubcategory()
    }
    //Search Button Click Event
    handleSearchInput() {
        if (this.searchInput.current.value !== '') {
            const newList = this.state.originalProduct.filter(item => {
                const lc = item.name.toLowerCase()
                const filter = this.searchInput.current.value.toLowerCase()
                return lc.includes(filter)
            })
            this.setState({ products: newList })
        }
    }
    //Search Field Input Change Event
    changeSearchInput(e) {
        if (e.target.value === '') {
            this.fetchProducts(this.signal)
        }
    }
    //Hide Bootstrap Modal
    hideModal() {
        this.fetchProducts(this.signal)
        this.setState({ modalShow: false })
    }

    //Handles Update Form Input Fields Data On Change
    handleInputChange(e) {
        const target = e.target
        const value = target.name === 'availability' ? target.checked : target.value
        const name = target.name
        this.setState({
            createdata: {
                ...this.state.createdata,
                [name]: value
            }
        })
    }

    //Handles Newly changed pics
    async handleImageChange(e) {
        const target = e.target
        const file = target.files[0]
        const name = target.name
        if (name.endsWith("1")) {
            this.setState({
                createdata: {
                    imageNo1: true
                }
            })
        } else if (name.endsWith("2")) {
            this.setState({ 
                createdata: {
                    imageNo2: true
                }
            })
        } else if (name.endsWith("3")) {
            this.setState({
                createdata: {
                    imageNo3: true
                }
            })
        }
        await this.setState({
            createdata: {
                ...this.state.createdata,
                [name]: file
            }
        })
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
                                    defaultValue={this.state.selectedProduct.name}
                                    name="name" onChange={(e) => this.handleInputChange(e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Description">Description</label>
                                <textarea type="text" cols="30" rows="5" className="form-control"
                                    defaultValue={this.state.selectedProduct.description}
                                    onChange={(e) => this.handleInputChange(e)}
                                    name="description" />
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-4 col-md-4">
                                    <label htmlFor="Vendor">Vendor</label>
                                    <input type="text" className="form-control"
                                        defaultValue={this.state.selectedProduct.vendor}
                                        onChange={(e) => this.handleInputChange(e)}
                                        name="vendor" />
                                </div>
                                <div className="form-group col-sm-4 col-md-4">
                                    <label htmlFor="Stock">Stock</label>
                                    <input type="text" className="form-control"
                                        defaultValue={this.state.selectedProduct.stock}
                                        onChange={(e) => this.handleInputChange(e)}
                                        name="stock" />
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="Price">Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className="form-control"
                                            defaultValue={this.state.selectedProduct.price}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="price" />
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
                                            defaultValue={this.state.selectedProduct.priceBeforeDiscount}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="beforeDiscount" />
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="Shipping">Shipping Charges</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className="form-control"
                                            defaultValue={this.state.selectedProduct.shippingCharges}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="shipping" />
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="weight">Package Weight</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">KG</div>
                                        </div>
                                        <input type="text" className="form-control"
                                            defaultValue={this.state.selectedProduct.packageWeight}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="weight" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="Subcategory">Subcategory</label>
                                <select className="custom-select" name="subcategoryId"
                                    onChange={(e) => this.handleInputChange(e)}>
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
                                            <input type="file" className="form-control-file mb-1"
                                                onChange={(e) => this.handleImageChange(e)}
                                                name="image1" />
                                        </div>)
                                }

                                {
                                    (!this.state.selectedProduct.imageBytes) ?
                                        <p>Loading...</p> :
                                        (<div className="col-4 col-sm-4 col-md-4">
                                            <img src={"data:image/jpeg;base64," +
                                                this.state.selectedProduct.imageBytes[1]}
                                                className="img-thumbnail img-fluid" alt="img2" />
                                            <input type="file" className="form-control-file mb-1"
                                                onChange={(e) => this.handleImageChange(e)}
                                                name="image2" />
                                        </div>)
                                }

                                {
                                    (!this.state.selectedProduct.imageBytes) ?
                                        <p>Loading...</p> :
                                        (<div className="col-4 col-sm-4 col-md-4">
                                            <img src={"data:image/jpeg;base64," +
                                                this.state.selectedProduct.imageBytes[2]}
                                                className="img-thumbnail img-fluid" alt="img1" />
                                            <input type="file" className="form-control-file mb-1"
                                                onChange={(e) => this.handleImageChange(e)}
                                                name="image3" />
                                        </div>)
                                }
                            </div>
                            <div className="form-group col-sm-6 col-md-6 mt-3">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input"
                                        defaultChecked={this.state.selectedProduct.availability} id="avail"
                                        onChange={(e) => this.handleInputChange(e)}
                                        name="availability" />
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

                <div className="my-3">
                    <div className="form-inline">
                        <input type="text" className="form-control form-control-lg mr-2"
                            placeholder="Search Product" ref={this.searchInput}
                            onChange={(e) => this.changeSearchInput(e)} />
                        <button className="btn btn-lg btn-outline-success"
                            onClick={() => this.handleSearchInput()}>
                            Search
                        </button>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.state.products.map(product => {
                        return (
                            <div className="col-4 my-2" key={product.id}>
                                <div className="card h-100">
                                    <img src={"data:image/jpeg;base64," + product.imageBytes[0]} height="200px" width="200px"
                                        alt="Product" className="card-img-top" />
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
