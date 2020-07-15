import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const ProductCreateModal = (props) => {
    const [state, setState] = useState({
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
        },
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
    })
    const handleBlur = (e) => {
        if (e.target.value === '') {
            setState({
                ...state,
                [e.target.name]: {
                    error: 'This field cannot be empty',
                    errorstyle: ['alert', 'alert-danger'],
                    fieldstyle: ['form-control', 'is-invalid']
                }
            })
        }
    }
    const handleInputChange = (e) => {
        const target = e.target
        const value = target.name === 'availability' ? target.checked : target.value
        const name = target.name
        if (value !== '') {
            setState({
                ...state,
                [name]: {
                    error: null,
                    errorstyle: [],
                    fieldstyle: ['form-control']
                },
                createdata: {
                    ...state.createdata,
                    [name]: value
                }
            })
        }
    }
    const handleImageSet = async (e) => {
        const target = e.target
        const value = target.files[0]
        const name = target.name
        await setState({
            ...state,
            createdata: {
                ...state.createdata,
                [name]: value
            }
        })
    }

    return (
        <div>
            <Modal show={props.modalShow} onHide={() => props.hideModal()} size="lg" centered>
                <Modal.Header><h4>Add Products</h4></Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="Name">Product Name</label>
                            <input type="text" className={state.name.fieldstyle.join(' ')}
                                onChange={(e) => handleInputChange(e)}
                                name="name"
                                onBlur={(e) => handleBlur(e)} />
                            <div className={state.name.errorstyle.join(' ')}>
                                {state.name.error}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <textarea type="text" cols="30" rows="5"
                                className={state.description.fieldstyle.join(' ')}
                                onChange={(e) => handleInputChange(e)}
                                name="description"
                                onBlur={(e) => handleBlur(e)} />
                            <div className={state.description.errorstyle.join(' ')}>
                                {state.description.error}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-4 col-md-4">
                                <label htmlFor="Vendor">Vendor</label>
                                <input type="text" className={state.vendor.fieldstyle.join(' ')}
                                    onChange={(e) => handleInputChange(e)}
                                    name="vendor"
                                    onBlur={(e) => handleBlur(e)} />
                                <div className={state.vendor.errorstyle.join(' ')}>
                                    {state.vendor.error}
                                </div>
                            </div>
                            <div className="form-group col-sm-4 col-md-4">
                                <label htmlFor="Stock">Stock</label>
                                <input type="text" className={state.stock.fieldstyle.join(' ')}
                                    onChange={(e) => handleInputChange(e)}
                                    name="stock"
                                    onBlur={(e) => handleBlur(e)} />
                                <div className={state.stock.errorstyle.join(' ')}>
                                    {state.stock.error}
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <label htmlFor="Price">Price</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">PKR</div>
                                    </div>
                                    <input type="text" className={state.price.fieldstyle.join(' ')}
                                        onChange={(e) => handleInputChange(e)}
                                        name="price"
                                        onBlur={(e) => handleBlur(e)} />
                                    <div className={state.price.errorstyle.join(' ')}>
                                        {state.price.error}
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
                                    <input type="text" className={state.beforeDiscount.fieldstyle.join(' ')}
                                        onChange={(e) => handleInputChange(e)}
                                        name="beforeDiscount"
                                        onBlur={(e) => handleBlur(e)} />
                                    <div className={state.beforeDiscount.errorstyle.join(' ')}>
                                        {state.beforeDiscount.error}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <label htmlFor="Shipping">Shipping Charges</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">PKR</div>
                                    </div>
                                    <input type="text" className={state.shipping.fieldstyle.join(' ')}
                                        onChange={(e) => handleInputChange(e)}
                                        name="shipping"
                                        onBlur={(e) => handleBlur(e)} />
                                    <div className={state.shipping.errorstyle.join(' ')}>
                                        {state.shipping.error}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <label htmlFor="weight">Package Weight</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">KG</div>
                                    </div>
                                    <input type="text" className={state.weight.fieldstyle.join(' ')}
                                        onChange={(e) => handleInputChange(e)}
                                        name="weight"
                                        onBlur={(e) => handleBlur(e)} />
                                    <div className={state.weight.errorstyle.join(' ')}>
                                        {state.weight.error}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6 col-md-6">
                                <label htmlFor="Image">Upload Image</label>
                                <input type="file" className="form-control-file mb-1"
                                    onChange={(e) => handleImageSet(e)}
                                    name="image1" />
                                <input type="file" className="form-control-file mb-1"
                                    onChange={(e) => handleImageSet(e)}
                                    name="image2" />
                                <input type="file" className="form-control-file mb-1"
                                    onChange={(e) => handleImageSet(e)}
                                    name="image3" />
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="Subcategory">Subcategory</label>
                                    <select className="custom-select" name="subcategoryId"
                                        onChange={(e) => handleInputChange(e)}>
                                        {props.subcategoriesData.map(subcategory => {
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
                                        onChange={(e) => handleInputChange(e)}
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
                            onClick={() => props.hideModal()}><b>Exit</b></button>
                        <button className="btn btn-outline-dark pl-5 pr-5 mr-5"
                            onClick={() => props.create(state.createdata)}>
                            <b>Save</b>
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductCreateModal;
