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

    handleNameInput(e){
        this.setState({createdata: {
            ...this.state.createdata,
             name: e.target.value
        }})
    }

    handleDescInput(e){
        this.setState({
            createdata:{
                ...this.state.createdata,
                description: e.target.value
            }
        })
    }

    handleVendorInput(e){
        this.setState({
            createdata:{
                ...this.state.createdata,
                vendor: e.target.value
            }
        })
    }

    handlePriceInput(e){
        this.setState({
            createdata:{
                ...this.state.createdata,
                price: e.target.value
            }
        })
    }

    handleDiscountInput(e){
        this.setState({
            createdata:{
                ...this.state.createdata,
                beforeDiscount: e.target.value
            }
        })
    }

    handleShippingInput(e){
        this.setState({
            createdata:{
                ...this.state.createdata,
                shipping: e.target.value
            }
        })
    }

    handleWeightInput(e) {
        this.setState({
            createdata:{
                ...this.state.createdata,
                weight: e.target.value
            }
        })
    }

    handleSubcategoryInput(e){
        this.setState({
            createdata:{
                ...this.state.createdata,
                subcategoryId: e.target.value
            }
        })
        console.log(this.state.createdata.subcategoryId)
    }

    setImage1(e) {
        this.setState({ image1: e.target.files[0] })
    }
    setImage2(e) {
        this.setState({ image2: e.target.files[0] })
    }
    setImage3(e) {
        this.setState({ image3: e.target.files[0] })
    }


    create() {
        let formdata = new FormData()
        formdata.append('name', this.state.createdata.name)
        formdata.append('description', this.state.createdata.description)
        formdata.append("vendor", this.state.createdata.vendor)
        formdata.append("price", this.state.createdata.price)
        formdata.append("PriceBeforeDiscount", this.state.createdata.beforeDiscount)
        formdata.append("image1", this.state.createdata.image1, this.state.createdata.image1.name)
        formdata.append("image2", this.state.createdata.image2, this.state.createdata.image2.name)
        formdata.append("image3", this.state.createdata.image3, this.state.createdata.image3.name)
        formdata.append('shippingCharges', this.state.createdata.shipping)
        formdata.append('availability', this.state.createdata.availability)
        formdata.append('packageWeight', this.state.createdata.weight)
        formdata.append('subCategoryID', this.state.createdata.subcategoryId)
        console.log(formdata)
        // const response = createProducts(formdata)
        // response.then(res => {
        //     if (res.data) {
        //         this.props.update()
        //         this.hideModal()
        //     }
        // })
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
                                onChange={(e) => this.handleNameInput(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Description">Description</label>
                                <textarea type="text" cols="30" rows="5" className="form-control" 
                                onChange={(e) => this.handleDescInput(e)}/>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-7 col-md-8">
                                    <label htmlFor="Vendor">Vendor</label>
                                    <input type="text" className="form-control"
                                    onChange={(e)=> this.handleVendorInput(e)}/>
                                </div>
                                <div className="col-sm-5 col-md-4">
                                    <label htmlFor="Price">Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className="form-control" 
                                        onChange={(e) => this.handlePriceInput(e)}/>
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
                                        onChange={(e) => this.handleDiscountInput(e)}/>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="Shipping">Shipping Charges</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">PKR</div>
                                        </div>
                                        <input type="text" className="form-control" 
                                        onChange={(e) => this.handleShippingInput(e)}/>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4">
                                    <label htmlFor="weight">Package Weight</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">KG</div>
                                        </div>
                                        <input type="text" className="form-control" 
                                        onChange={(e) => this.handleWeightInput(e)}/>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group col-sm-6 col-md-6">
                                    <label htmlFor="Image">Upload Image</label>
                                    <input type="file" className="form-control-file mb-1"
                                        onChange={(e) => this.setImage1(e)} />
                                    <input type="file" className="form-control-file mb-1"
                                        onChange={(e) => this.this.setImage2(e)} />
                                    <input type="file" className="form-control-file mb-1"
                                        onChange={(e) => this.setImage3(e)} />
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Subcategory">Subcategory</label>
                                        <select className="custom-select" name="subcategoryselect"
                                            onChange={(e) => this.handleSubcategoryInput(e)}>
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
                                        <input type="checkbox" className="custom-control-input" id="avail"/>
                                        <label className="custom-control-label"
                                            htmlFor="avail">Availability</label>
                                    </div>
                                </div>

                            </div>


                            <div className="form-group text-right">
                                <button className="btn btn-outline-secondary mr-2"
                                    onClick={() => this.hideModal()}><b>Exit</b></button>
                                <button className="btn btn-outline-success pl-5 pr-5 mr-5"
                                    onClick={() => this.create()}>
                                    <b>Save</b>
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
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
