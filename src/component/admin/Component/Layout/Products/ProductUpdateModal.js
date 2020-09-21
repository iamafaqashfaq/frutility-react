import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'

const ProductUpdateModal = (props) => {
    useEffect(() => {
        const initState = async () => {
            await setState({
                ...state,
                createdata: {
                    ...state.createdata,
                    name: props.selectedProduct.name,
                    description: props.selectedProduct.description,
                    vendor: props.selectedProduct.vendor,
                    price: parseFloat(props.selectedProduct.price),
                    beforeDiscount: parseFloat(props.selectedProduct.priceBeforeDiscount),
                    shipping: parseFloat(props.selectedProduct.shippingCharges),
                    availability: props.selectedProduct.availability,
                    stock: parseInt(props.selectedProduct.stock),
                    weight: parseFloat(props.selectedProduct.packageWeight),
                    subcategoryId: props.selectedProduct.subCategoryID,
                }
            })
        }

        initState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
            shipping: 0,
            availability: false,
            stock: null,
            weight: 0,
            subcategoryId: 1,
            imageNo1: false
        }
    })

    //Handles Update Form Input Fields Data On Change
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
        else {
            setState({
                ...state,
                [name]: {
                    error: 'This field cannot be empty',
                    errorstyle: ['alert', 'alert-danger'],
                    fieldstyle: ['form-control', 'is-invalid']
                }
            })
        }
    }
    //Handles Newly changed pics
    const handleImageChange = (e) => {
        const target = e.target
        const file = target.files[0]
        const name = target.name
        switch (name) {
            case 'image1':
                setState({
                    ...state,
                    createdata: {
                        ...state.createdata,
                        [name]: file,
                        imageNo1: true
                    }
                })
                break
            default:
        }
    }
    return (
        <div>
            <Modal show={props.modalShow} size="lg" onHide={() => props.hideModal()}>
                <Modal.Header>
                    <h4>Product Details</h4>
                    <i className="fa fa-trash-o fa-2x btn 
                        btn-outline-danger text-right" onClick={() => props.delete()}></i>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="Name">Product Name</label>
                            <input type="text" className={state.name.fieldstyle.join(' ')}
                                defaultValue={props.selectedProduct.name}
                                name="name" onChange={(e) => handleInputChange(e)} />
                            <div className={state.name.errorstyle.join(' ')}>
                                {state.name.error}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <textarea type="text" cols="30" rows="5"
                                className={state.description.fieldstyle.join(' ')}
                                defaultValue={props.selectedProduct.description}
                                onChange={(e) => handleInputChange(e)}
                                name="description" />
                            <div className={state.description.errorstyle.join(' ')}>
                                {state.description.error}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-4 col-md-4">
                                <label htmlFor="Vendor">Vendor</label>
                                <input type="text" className={state.vendor.fieldstyle.join(' ')}
                                    defaultValue={props.selectedProduct.vendor}
                                    onChange={(e) => handleInputChange(e)}
                                    name="vendor" />
                                <div className={state.vendor.errorstyle.join(' ')}>
                                    {state.vendor.error}
                                </div>
                            </div>
                            <div className="form-group col-sm-4 col-md-4">
                                <label htmlFor="Stock">Stock</label>
                                <input type="text" className={state.stock.fieldstyle.join(' ')}
                                    defaultValue={props.selectedProduct.stock}
                                    onChange={(e) => handleInputChange(e)}
                                    name="stock" />
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
                                        defaultValue={props.selectedProduct.price}
                                        onChange={(e) => handleInputChange(e)}
                                        name="price" />
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
                                        defaultValue={props.selectedProduct.priceBeforeDiscount}
                                        onChange={(e) => handleInputChange(e)}
                                        name="beforeDiscount" />
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
                                        defaultValue={props.selectedProduct.shippingCharges}
                                        onChange={(e) => handleInputChange(e)}
                                        name="shipping" />
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
                                        defaultValue={props.selectedProduct.packageWeight}
                                        onChange={(e) => handleInputChange(e)}
                                        name="weight" />
                                    <div className={state.weight.errorstyle.join(' ')}>
                                        {state.weight.error}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-1">
                            <label htmlFor="Subcategory">Subcategory</label>
                            <select className="custom-select" name="subcategoryId"
                                onChange={(e) => handleInputChange(e)}
                                defaultValue={props.selectedProduct.subCategoryID}>
                                {props.subcategorydata.map(subcategory => {
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
                            <div className="col-4 col-sm-4 col-md-4">
                                <img src={props.selectedProduct.imageURI}
                                    height="200px"
                                    width="200px" alt={"img"} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4">
                                <input type="file" className="form-control-file mb-1"
                                    onChange={(e) => handleImageChange(e)}
                                    name="image1" />
                            </div>
                        </div>
                        <div className="form-group col-sm-6 col-md-6 mt-3">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input"
                                    defaultChecked={props.selectedProduct.availability} id="avail"
                                    onChange={(e) => handleInputChange(e)}
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
                            onClick={() => props.hideModal()}><b>Exit</b></button>
                        <button className="btn btn-outline-dark pl-5 pr-5 mr-5"
                            onClick={() => props.update(state.createdata)}>
                            <b>Save</b>
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductUpdateModal;