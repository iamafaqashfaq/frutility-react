import React, { Component } from 'react'
import { getSubcategory, createProducts } from '../Requests/RequestPayloads'
import { Modal } from 'react-bootstrap'
import Aux from './../../../../hoc/auxillary';

class ProductCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false,
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
                subcategoryId: 1
            }
        }
        this.SubcategoryIDInput = React.createRef()
    }
    getCategories() {
        const response = getSubcategory()
        response.then(res => {
            if (res.data !== undefined) {
                this.setState({ subcategoriesData: res.data })
            }
        }).catch(err => console.error(err))
    }
    showModal() {
        this.getCategories()
        this.setState({ modalShow: true })
    }
    hideModal() {
        this.setState({ modalShow: false })
        this.props.update()
    }

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
    async handleImageSet(e) {
        const target = e.target
        const value = target.files[0]
        const name = target.name
        await this.setState({
            createdata: {
                ...this.state.createdata,
                [name]: value
            }
        })
    }


    create() {
        let formdata = new FormData()
        formdata.append('Name', this.state.createdata.name)
        formdata.append('Description', this.state.createdata.description)
        formdata.append("Vendor", this.state.createdata.vendor)
        formdata.append("Price", parseFloat(this.state.createdata.price))
        formdata.append("PriceBeforeDiscount", parseFloat(this.state.createdata.beforeDiscount))
        formdata.append("Image1", this.state.createdata.image1)
        formdata.append("Image2", this.state.createdata.image2)
        formdata.append("Image3", this.state.createdata.image3)
        formdata.append('ShippingCharges', parseFloat(this.state.createdata.shipping))
        formdata.append('Availability', this.state.createdata.availability)
        formdata.append('Stock', parseInt(this.state.createdata.stock))
        formdata.append('PackageWeight', parseFloat(this.state.createdata.weight))
        formdata.append('SubCategoryID', parseInt(this.state.createdata.subcategoryId))
        console.log(formdata)
        const response = createProducts(formdata)
        response.then(res => {
            if (res.data) {
                this.props.update()
                this.hideModal()
            }
        })
    }

    render() {
        return (
            <Aux>
                {/* MODAL FOR CREATION  */}
                <Modal show={this.state.modalShow} onHide={() => this.hideModal()} size="lg" centered>
                    <Modal.Header><h4>Add Products</h4></Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="Name">Product Name</label>
                                <input type="text" className="form-control"
                                    onChange={(e) => this.handleInputChange(e)}
                                    name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Description">Description</label>
                                <textarea type="text" cols="30" rows="5" className="form-control"
                                    onChange={(e) => this.handleInputChange(e)}
                                    name="description" />
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-4 col-md-4">
                                    <label htmlFor="Vendor">Vendor</label>
                                    <input type="text" className="form-control"
                                        onChange={(e) => this.handleInputChange(e)}
                                        name="vendor" />
                                </div>
                                <div className="form-group col-sm-4 col-md-4">
                                    <label htmlFor="Stock">Stock</label>
                                    <input type="text" className="form-control"
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
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="weight" />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group col-sm-6 col-md-6">
                                    <label htmlFor="Image">Upload Image</label>
                                    <input type="file" className="form-control-file mb-1"
                                        onChange={(e) => this.handleImageSet(e)}
                                        name="image1" />
                                    <input type="file" className="form-control-file mb-1"
                                        onChange={(e) => this.handleImageSet(e)}
                                        name="image2" />
                                    <input type="file" className="form-control-file mb-1"
                                        onChange={(e) => this.handleImageSet(e)}
                                        name="image3" />
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
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
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input"
                                            onChange={(e) => this.handleInputChange(e)}
                                            name="availability" id="avail" />
                                        <label className="custom-control-label"
                                            htmlFor="avail">Availability</label>
                                    </div>
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


                {/* Actual Body  */}
                <div className="card bg-dark text-white mt-4">
                    <div className="card-header"><h3>Products</h3></div>
                    <div className="card-body">
                        <h4 className="card-title text-capitalize text-center">
                            add, update or delete products here
                    </h4>
                    </div>
                    <div className="card-footer text-right">
                        <button onClick={() => this.showModal()}
                            className="btn btn-secondary pl-5 pr-5"><b>Create</b></button>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default ProductCreate
