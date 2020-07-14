import React, { Component } from 'react'
import { getProducts, getSubcategory, updateProduct, deleteProduct } from '../Requests/RequestPayloads'
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
                stock: null,
                weight: 0,
                subcategoryId: 1,
                imageNo1: false,
                imageNo2: false,
                imageNo3: false,
            },
            name: {
                error: null,
                errorstyle: [],
                fieldstyle: ['form-control']
            },
            description: {
                error: null,
                errorstyle: [],
                fieldstyle: ['form-control']
            },
            vendor: {
                error: null,
                errorstyle: [],
                fieldstyle: ['form-control']
            },
            price: {
                error: null,
                errorstyle: [],
                fieldstyle: ['form-control']
            },
            beforeDiscount: {
                error: null,
                errorstyle: [],
                fieldstyle: ['form-control']
            },
            shipping: {
                error: null,
                errorstyle: [],
                fieldstyle: ['form-control']
            },
            stock: {
                error: null,
                errorstyle: [],
                fieldstyle: ['form-control']
            },
            weight: {
                error: null,
                errorstyle: [],
                fieldstyle: ['form-control']
            }
        }
        this.searchInput = React.createRef()
        this.subcategorySelect = React.createRef()
    }
    signal = axios.CancelToken.source()
    //On First load Fetch products to show 
    componentDidMount() {
        this.fetchProducts(this.signal)
        this.fetchSubcategory()
    }
    // Destroy All Axios Requests
    componentWillUnmount() {
        this.signal.cancel('Cancelling All Product Requests')
    }
    componentDidUpdate(prevProps) {
        if (this.props.change !== prevProps.change) {
            this.fetchProducts(this.signal)
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
        this.setState({
            selectedProduct: product,
            modalShow: !this.state.modalShow,
            createdata: {
                ...this.state.createdata,
                name: product.name,
                description: product.description,
                vendor: product.vendor,
                price: parseFloat(product.price),
                beforeDiscount: parseFloat(product.priceBeforeDiscount),
                shipping: parseFloat(product.shippingCharges),
                availability: product.availability,
                stock: parseInt(product.stock),
                weight: parseFloat(product.packageWeight),
                subcategoryId: product.subCategoryID,
            }
        })
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
        if (value !== '') {
            this.setState({
                [name]: {
                    ...this.state[name],
                    error: null,
                    errorstyle: [],
                    fieldstyle: ['form-control']
                },
                createdata: {
                    ...this.state.createdata,
                    [name]: value
                }
            })
        }
        else {
            this.setState({
                [e.target.name]: {
                    ...this.state[e.target.name],
                    error: 'This field cannot be empty',
                    errorstyle: ['alert', 'alert-danger'],
                    fieldstyle: ['form-control', 'is-invalid']
                }
            })
        }
    }

    //Handles Newly changed pics
    async handleImageChange(e) {
        const target = e.target
        const file = target.files[0]
        const name = target.name
        const convert = String(name)
        if (convert.endsWith("1")) {
            await this.setState({
                createdata: {
                    ...this.state.createdata,
                    imageNo1: true
                }
            })
        } else if (convert.endsWith("2")) {
            await this.setState({
                createdata: {
                    ...this.state.createdata,
                    imageNo2: true
                }
            })
        } else if (convert.endsWith("3")) {
            await this.setState({
                createdata: {
                    ...this.state.createdata,
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

    update() {
        let formdata = new FormData()
        formdata.append('Id', this.state.selectedProduct.id)
        formdata.append('Name', this.state.createdata.name)
        formdata.append('Description', this.state.createdata.description)
        formdata.append("Vendor", this.state.createdata.vendor)
        formdata.append("Price", parseFloat(this.state.createdata.price))
        formdata.append("PriceBeforeDiscount", parseFloat(this.state.createdata.beforeDiscount))
        formdata.append("Image1", this.state.createdata.image1)
        formdata.append("Image2", this.state.createdata.image2)
        formdata.append("Image3", this.state.createdata.image3)
        formdata.append("ImageNo1", this.state.createdata.imageNo1)
        formdata.append("ImageNo2", this.state.createdata.imageNo2)
        formdata.append("ImageNo3", this.state.createdata.imageNo3)
        formdata.append('ShippingCharges', parseFloat(this.state.createdata.shipping))
        formdata.append('Availability', this.state.createdata.availability)
        formdata.append('Stock', parseInt(this.state.createdata.stock))
        formdata.append('PackageWeight', parseFloat(this.state.createdata.weight))
        formdata.append('SubCategoryID', parseInt(this.state.createdata.subcategoryId))
        const response = updateProduct(formdata, this.state.selectedProduct.id)
        response.then(res => {
            if (res.data) {
                this.hideModal()
            }
        })
    }

    delete() {
        const result = window.confirm('Are you sure to delete this product?')
        if (result) {
            const response = deleteProduct(this.state.selectedProduct.id)
            response.then(res => {
                this.hideModal()
            })
        }
        else {
            window.alert("Unable to delete Product!")
        }
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.modalShow} size="lg" onHide={() => this.hideModal()}>
                    <Modal.Header>
                        <h4>Product Details</h4>
                        <i className="fa fa-trash-o fa-2x btn 
                        btn-outline-danger text-right" onClick={() => this.delete()}></i>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="Name">Product Name</label>
                                <input type="text" className={this.state.name.fieldstyle.join(' ')}
                                    defaultValue={this.state.selectedProduct.name}
                                    name="name" onChange={(e) => this.handleInputChange(e)} />
                                <div className={this.state.name.errorstyle.join(' ')}>
                                    {this.state.name.error}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Description">Description</label>
                                <textarea type="text" cols="30" rows="5"
                                    className={this.state.description.fieldstyle.join(' ')}
                                    defaultValue={this.state.selectedProduct.description}
                                    onChange={(e) => this.handleInputChange(e)}
                                    name="description" />
                                <div className={this.state.description.errorstyle.join(' ')}>
                                    {this.state.description.error}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-4 col-md-4">
                                    <label htmlFor="Vendor">Vendor</label>
                                    <input type="text" className={this.state.vendor.fieldstyle.join(' ')}
                                        defaultValue={this.state.selectedProduct.vendor}
                                        onChange={(e) => this.handleInputChange(e)}
                                        name="vendor" />
                                    <div className={this.state.vendor.errorstyle.join(' ')}>
                                        {this.state.vendor.error}
                                    </div>
                                </div>
                                <div className="form-group col-sm-4 col-md-4">
                                    <label htmlFor="Stock">Stock</label>
                                    <input type="text" className={this.state.stock.fieldstyle.join(' ')}
                                        defaultValue={this.state.selectedProduct.stock}
                                        onChange={(e) => this.handleInputChange(e)}
                                        name="stock" />
                                    <div className={this.state.stock.errorstyle.join(' ')}>
                                        {this.state.stock.error}
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="Price">Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className={this.state.price.fieldstyle.join(' ')}
                                            defaultValue={this.state.selectedProduct.price}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="price" />
                                        <div className={this.state.price.errorstyle.join(' ')}>
                                            {this.state.price.error}
                                        </div>
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
                                        <input type="text" className={this.state.beforeDiscount.fieldstyle.join(' ')}
                                            defaultValue={this.state.selectedProduct.priceBeforeDiscount}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="beforeDiscount" />
                                        <div className={this.state.beforeDiscount.errorstyle.join(' ')}>
                                            {this.state.beforeDiscount.error}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="Shipping">Shipping Charges</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className={this.state.shipping.fieldstyle.join(' ')}
                                            defaultValue={this.state.selectedProduct.shippingCharges}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="shipping" />
                                        <div className={this.state.shipping.errorstyle.join(' ')}>
                                            {this.state.shipping.error}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="weight">Package Weight</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">KG</div>
                                        </div>
                                        <input type="text" className={this.state.weight.fieldstyle.join(' ')}
                                            defaultValue={this.state.selectedProduct.packageWeight}
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="weight" />
                                        <div className={this.state.weight.errorstyle.join(' ')}>
                                            {this.state.weight.error}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="Subcategory">Subcategory</label>
                                <select className="custom-select" name="subcategoryId"
                                    onChange={(e) => this.handleInputChange(e)}
                                    defaultValue={this.state.selectedProduct.subCategoryID}>
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
                                                height="200px"
                                                width="200px" alt="img1" />
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
                                                height="200px"
                                                width="200px" alt="img2" />
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
                                                height="200px"
                                                width="200px" alt="img1" />
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
                            <button className="btn btn-outline-dark pl-5 pr-5 mr-5"
                                onClick={() => this.update()}>
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
                        <button className="btn btn-lg btn-outline-secondary"
                            onClick={() => this.handleSearchInput()}>
                            Search
                        </button>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.state.products.map(product => {
                        return (
                            <div className="col-4 my-2" key={product.id}>
                                <div className="card border-secondary text-secondary h-100">
                                    <img src={"data:image/jpeg;base64," + product.imageBytes[0]} height="200px" width="200px"
                                        alt="Product" className="card-img-top" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h5>{product.name}</h5>
                                        </div>
                                        <div className="card-text">
                                            <p>
                                                <b>Vendor </b> {product.vendor}
                                            </p>
                                            <p>
                                                <b>Price </b> {product.price} &nbsp;
                                                <h6 className="d-inline">
                                                    <del>{product.priceBeforeDiscount}</del>
                                                </h6>
                                            </p>
                                            <p>
                                                <b>Stock </b> {product.stock} &emsp; 
                                                <b>Shipping Charges </b> {product.shippingCharges}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer text-secondary">
                                        <small className="">
                                            {product.availability ? "Available" : "Out of Stock"}
                                        </small>
                                        <button onClick={() => this.showModal(product)}
                                            className="btn btn-outline-dark float-right">
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
