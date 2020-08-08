import React, { useState, useEffect } from 'react'
import { getUser } from './../Requests/UserRequestPayload';
import Auxillary from './../../hoc/auxillary';
import ChangePassword from './ChangePassword';

const Account = () => {
    const [user, setUser] = useState({})
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        const response = getUser()
        response.then(res => {
            setUser(res.data)
        })
    })
    const hideModal = () => {
        setShowModal(false)
    }
    return (
        <Auxillary>
            <ChangePassword show={showModal} hide={()=>hideModal()}/>
            <div className="container">
                <h4 className="text-center bg-dark rounded-pill p-3 text-white">User Details</h4>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-2 col-lg-2 align-self-center animate__animated animate__backInLeft">
                            <i className="fa fa-user-circle fa-5x"></i>
                            <p className="lead">{user.userName}</p>
                        </div>
                        <div className="col-md-5 col-lg-5 m-3 tracking-in-expand">
                            <h4 className="d-inline-block mr-4">Name</h4>
                            <h5 className="d-inline-block">{user.firstName + " " + user.lastName}</h5>
                            <br />
                            <h4 className="d-inline-block">Email:&nbsp;</h4>
                            <h5 className="d-inline-block">{user.email}</h5>
                            <br />
                            <h4 className="d-inline-block">Phone:&nbsp;</h4>
                            <h5 className="d-inline-block">{user.phoneNumber}</h5>
                            <br />
                            <h4 className="d-inline-block">Shipping Address:&nbsp;</h4>
                            <h5 className="d-inline-block">
                                {user.shippingAddress + ", " + user.shippingCity + ", " + user.shippingState}
                            </h5>
                            <br />
                            <h4 className="d-inline-block">Billing Address:&nbsp;</h4>
                            <h5 className="d-inline-block">
                                {user.billingAddress + ", " + user.billingCity + ", " + user.billingState}
                            </h5>
                            <br />
                            <button className="btn btn-outline-dark font-weight-bolder mr-2" 
                            onClick={() => setShowModal(true)}>
                                Change Password
                            </button>
                            <button className="btn btn-outline-dark font-weight-bolder">Change Address</button>
                        </div>
                    </div>
                </div>
            </div>
        </Auxillary>
    )
}

export default Account;
