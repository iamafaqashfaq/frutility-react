import React, { Component } from 'react'
import { getCategory, createProducts } from '../Requests/RequestPayloads'
import { Modal } from 'react-bootstrap'
import Aux from './../../../../hoc/auxillary';

class ProductCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false,
            categoriesData: [],
            image1: null,
            image2: null,
            image3: null
        }
        this.NameInput = React.createRef()
        this.DescriptionInput = React.createRef()
        this.VendorInput = React.createRef()
        this.PriceInput = React.createRef()
        this.PriceBeforeDiscountInput = React.createRef()
        this.ShippingChargesInput = React.createRef()
        this.AvailabilityInput = React.createRef()
        this.StockInput = React.createRef()
        this.PackageWeightInput = React.createRef()
        this.SubcategoryIDInput = React.createRef()
    }
    getCategories() {
        const response = getCategory()
        response.then(res => {
            if (res.data !== undefined) {
                this.setState({ categoriesData: res.data })
            }
        }).catch(err => console.error(err))
    }
    showModal() {
        this.getCategories()
        this.setState({ modalShow: true })
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
    hideModal() {
        this.setState({ modalShow: false })
        this.props.update()
    }

    create() {
        if (this.NameInput.current.value !== '' &&
            this.DescriptionInput.current.value !== '' && this.VendorInput.current.value !== ''
            && this.PriceInput.current.value !== '' && this.ShippingChargesInput.current.value !== ''
            && this.StockInput.current.value !== ''
            && this.PackageWeightInput.current.value !== '') {
            let parseprice = parseFloat(this.PriceInput.current.value)
            let discountparse = 0
            let shipping = parseFloat(this.ShippingChargesInput.current.value)
            let weight = parseFloat(this.PackageWeightInput.current.value)
            let subcategoryid = parseInt(this.SubcategoryIDInput.current.value)
            if (this.PriceBeforeDiscountInput.current.value !== '') {
                discountparse = parseFloat(this.PriceBeforeDiscountInput.current.value)
            }
            let formdata = new FormData()
            formdata.append('name', this.NameInput.current.value)
            formdata.append('description', this.DescriptionInput.current.value)
            formdata.append("vendor", this.VendorInput.current.value)
            formdata.append("price", parseprice)
            formdata.append("PriceBeforeDiscount", discountparse)
            if (this.state.image1 !== null) {
                formdata.append("image1", this.state.image1, this.state.image1.name)
            }
            if (this.state.image2 !== null) {
                formdata.append("image2", this.state.image2, this.state.image2.name)
            }
            if (this.state.image3 !== null) {
                formdata.append("image3", this.state.image3, this.state.image3.name)
            }
            formdata.append('shippingCharges', shipping)
            formdata.append('availability', this.AvailabilityInput.current.value)
            formdata.append('packageWeight', weight)
            formdata.append('subCategoryID', subcategoryid)
            const response = createProducts(formdata)
            response.then(res => {
                if (res.data) {
                    this.props.update()
                    this.hideModal()
                }
            })
        }
    }

    render() {
        return (
            <Aux>
                {/* MODAL FOR CREATION  */}
                <Modal show={this.state.modalShow} onHide={() => this.hideModal()}>
                    <Modal.Header><h4>Add Products</h4></Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="Name">Product Name</label>
                                <input type="text" className="form-control" ref={this.NameInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Description">Description</label>
                                <textarea type="text" cols="30" rows="10" className="form-control"
                                    ref={this.DescriptionInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Vendor">Vender</label>
                                <input type="text" className="form-control" ref={this.VendorInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Price">Price</label>
                                <input type="text" className="form-control" ref={this.PriceInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="BeforeDiscount">Before Discount</label>
                                <input type="text" className="form-control" ref={this.PriceBeforeDiscountInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Image">Upload Image</label>
                                <input type="file" className="form-control-file mb-1" onChange={this.setImage1} />
                                <input type="file" className="form-control-file mb-1" onChange={this.setImage2} />
                                <input type="file" className="form-control-file mb-1" onChange={this.setImage3} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="Shipping">Shipping Charges</label>
                                <input type="text" className="form-control" ref={this.ShippingChargesInput} />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-outline-secondary" onClick={() => this.hideModal()}><b>Exit</b></button>
                        <button className="btn btn-outline-success pl-5 pr-5" onClick={() => this.create()}>
                            <b>Save</b>
                        </button>

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
