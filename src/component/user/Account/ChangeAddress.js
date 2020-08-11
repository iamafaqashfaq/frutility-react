import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { changeAddress } from './../Requests/UserRequestPayload';
import { useToasts } from 'react-toast-notifications';

const ChangeAddress = (props) => {
    const [address, setAddress] = useState({})
    const { addToast } = useToasts()
    useEffect(() => {
        setAddress({
            shippingAddress: props.data.shippingAddress,
            shippingState: props.data.shippingState,
            shippingCity: props.data.shippingCity,
            billingAddress: props.data.billingAddress,
            billingState: props.data.billingState,
            billingCity: props.data.billingCity
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.data])
    const [validate, setValidation] = useState({
        shippingAddress: ["alert","alert-danger","d-none"],
        shippingState: ["alert","alert-danger","d-none"],
        shippingCity: ["alert","alert-danger","d-none"],
        billingAddress: ["alert","alert-danger","d-none"],
        billingState: ["alert","alert-danger","d-none"],
        billingCity: ["alert","alert-danger","d-none"]
    })
    const handleInputChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        if (value !== null) {
            setAddress({ ...address, [name]: value })
            setValidation({...validate, [name]: ["alert","alert-danger","d-none"]})
        }
    }
    const handleInputBlur = (e) => {
        const value = e.target.value
        const name = e.target.name
        if (value === null) {
            setValidation({...validate, [name]: ["alert","alert-danger","d-block"]})
        }
    }
    const handleSubmit = () => {
        const response = changeAddress(address)
        response.then(res => {
            if(res.data){
                addToast("Address Updated", {
                    appearance: 'success',
                    autoDismiss: true
                })
                props.hide()
            }
            else{
                addToast("Address could not be updated", {
                    appearance: 'error',
                    autoDismiss: true
                })
            }
        })
    }
    return (
        <Modal show={props.show} onHide={()=>props.hide()}>
            <Modal.Header>
                Change Address
            </Modal.Header>
            <Modal.Body>
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-5">
                        <div className="form-group">
                            <label htmlFor="sAddress">Shipping Address</label>
                            <textarea rows="3" col="5" className="form-control"
                                placeholder="Enter Shipping Address" name="shippingAddress"
                                onChange={(e) => handleInputChange(e)}
                                onBlur={(e) => handleInputBlur(e)} 
                                defaultValue={props.data.shippingAddress}/>
                            <span className={validate.shippingAddress.join(' ')}>Cannot be empty</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sState">Shipping State</label>
                            <input type="text" className="form-control"
                                placeholder="Enter Shipping State" name="shippingState"
                                onChange={(e) => handleInputChange(e)}
                                onBlur={(e) => handleInputBlur(e)} 
                                defaultValue={props.data.shippingState}/>
                            <span className={validate.shippingState.join(' ')}>Cannot be empty</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sCity">Shipping City</label>
                            <input type="text" className="form-control"
                                placeholder="Enter Shipping City" name="shippingCity"
                                onChange={(e) => handleInputChange(e)}
                                onBlur={(e) => handleInputBlur(e)} 
                                defaultValue={props.data.shippingCity}/>
                            <span className={validate.shippingCity.join(' ')}>Cannot be empty</span>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <div className="form-group">
                            <label htmlFor="bAddress">Billing Address</label>
                            <textarea rows="3" col="5" className="form-control"
                                placeholder="Enter Billing Address" name="billingAddress"
                                onChange={(e) => handleInputChange(e)}
                                onBlur={(e) => handleInputBlur(e)}
                                defaultValue={props.data.billingAddress}/>
                            <span className={validate.billingAddress.join(' ')}>Cannot be empty</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bState">Billing State</label>
                            <input type="text" className="form-control"
                                placeholder="Enter Billing State" name="billingState"
                                onChange={(e) => handleInputChange(e)}
                                onBlur={(e) => handleInputBlur(e)}
                                defaultValue={props.data.billingState}/>
                            <span className={validate.billingState.join(' ')}>Cannot be empty</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bCity">Billing City</label>
                            <input type="text" className="form-control"
                                placeholder="Enter Billing City" name="billingCity"
                                onChange={(e) => handleInputChange(e)}
                                onBlur={(e) => handleInputBlur(e)}
                                defaultValue={props.data.billingCity}/>
                            <span className={validate.billingCity.join(' ')}>Cannot be empty</span>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-success font-weight-bolder" onClick={() => props.hide()}>
                    Exit
                </button>
                <button className="btn btn-outline-success font-weight-bolder" onClick={() => handleSubmit()}>
                    Update Address
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChangeAddress;
