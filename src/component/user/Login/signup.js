import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { userSignup } from './../Requests/UserRequestPayload';
const Signup = () => {
    const history = useHistory()
    const [user, setUser] = useState(
        {
            fname: '',
            lname: '',
            email: '',
            sAddress: '',
            sState: '',
            sCity: '',
            bAddress: '',
            bState: '',
            bCity: '',
            phone: null,
            username: '',
            password: '',
            cpassword: ''
        })
    const [validate, setValidation] = useState({
        fname: ["alert", "alert-danger", "d-none"],
        lname: ["alert", "alert-danger", "d-none"],
        email: ["alert", "alert-danger", "d-none"],
        sAddress: ["alert", "alert-danger", "d-none"],
        sState: ["alert", "alert-danger", "d-none"],
        sCity: ["alert", "alert-danger", "d-none"],
        bAddress: ["alert", "alert-danger", "d-none"],
        bState: ["alert", "alert-danger", "d-none"],
        bCity: ["alert", "alert-danger", "d-none"],
        phone: ["alert", "alert-danger", "d-none"],
        username: ["alert", "alert-danger", "d-none"],
        password: ["alert", "alert-danger", "d-none"],
        cpassword: ["alert", "alert-danger", "d-none"]
    })
    const handleInputChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        if (name === "cpassword") {
            if (value !== user.password) {
                setValidation({ ...validate, [name]: ["alert", "alert-danger", "d-block"] })
            }
            else {
                setValidation({ ...validate, [name]: ["alert", "alert-danger", "d-none"] })
            }
        }
        setUser({ ...user, [name]: value })
    }
    const handleInputBlur = (e) => {
        const value = e.target.value
        const name = e.target.name
        if (value === '') {
            setValidation({ ...validate, [name]: ["alert", "alert-danger", "d-block"] })
        }
        else {
            setValidation({ ...validate, [name]: ["alert", "alert-danger", "d-none"] })
        }
    }
    const handleBillingCheck = (e) => {
        const value = e.target.checked
        if (value === true) {
            setUser({ ...user, bAddress: user.sAddress, bState: user.sState, bCity: user.sCity })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.fname.length !== 0 && user.lname.length !== 0
            && user.email.length !== 0
            && user.sAddress.length !== 0
            && user.sState.length !== 0
            && user.sCity.length !== 0
            && user.bAddress.length !== 0
            && user.bState.length !== 0
            && user.bCity.length !== 0
            && user.phone.length !== null
            && user.username.length !== 0
            && user.password.length !== 0
            && user.cpassword.length !== 0) {
            const response = userSignup(user)
            response.then(res => {
                if (res.data !== false) {
                    localStorage.setItem('userUserName', res.data.userName)
                    localStorage.setItem('userToken', res.data.entoken)
                    history.push("/")

                }
            })
        }
        else {
            window.alert("Field cannot be empty")
        }
    }
    return (
        <div className="m-5 animate__animated animate__backInLeft">
            <div className="container m-auto w-50">
                <h4 className="bg-dark rounded-pill 
                p-3 m-auto align-content-center 
                text-center text-white w-50">Signup</h4>
                <div className="mt-3">
                    <form className="m-auto">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="Firstname">First Name</label>
                                    <input type="text" placeholder="Enter First Name"
                                        className="form-control" name="fname"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.fname.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Lastname">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name"
                                        className="form-control" name="lname"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.lname.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" placeholder="example@frutility.com"
                                        className="form-control" name="email"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.email.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sAddress">Shipping Address</label>
                                    <textarea rows="3" col="5" className="form-control"
                                        placeholder="Enter Shipping Address" name="sAddress"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.sAddress.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sState">Shipping State</label>
                                    <input type="text" className="form-control"
                                        placeholder="Enter Shipping State" name="sState"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.sState.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sCity">Shipping City</label>
                                    <input type="text" className="form-control"
                                        placeholder="Enter Shipping City" name="sCity"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.sCity.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone#</label>
                                    <input type="text" placeholder="03XX-XXXXXXX"
                                        className="form-control" name="phone"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.phone.join(' ')}>Cannot be empty</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                        id="customCheck2" onChange={(e) => handleBillingCheck(e)} />
                                    <label className="custom-control-label"
                                        htmlFor="customCheck2">Same as Shipping</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bAddress">Billing Address</label>
                                    <textarea rows="3" col="5" className="form-control"
                                        placeholder="Enter Billing Address" name="bAddress"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)}
                                        value={user.bAddress} />
                                    <span className={validate.bAddress.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bState">Billing State</label>
                                    <input type="text" className="form-control"
                                        placeholder="Enter Billing State" name="bState"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)}
                                        value={user.bState} />
                                    <span className={validate.bState.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bCity">Billing City</label>
                                    <input type="text" className="form-control"
                                        placeholder="Enter Billing City" name="bCity"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)}
                                        value={user.bCity} />
                                    <span className={validate.bCity.join(' ')}>Cannot be empty</span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Username">Username</label>
                                    <input type="text" placeholder="Enter Username"
                                        className="form-control" name="username"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.username.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password">Password</label>
                                    <input type="password" placeholder="Enter Password"
                                        className="form-control" name="password"
                                        onChange={(e) => handleInputChange(e)}
                                        onBlur={(e) => handleInputBlur(e)} />
                                    <span className={validate.password.join(' ')}>Cannot be empty</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="CPassword">Confirm Password</label>
                                    <input type="password" placeholder="Confirm Password"
                                        className="form-control" name="cpassword"
                                        onChange={(e) => handleInputChange(e)} />
                                    <span className={validate.cpassword.join(' ')}>Password Not Matched</span>
                                </div>
                            </div>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input"
                                id="customCheck1" />
                            <label className="custom-control-label"
                                htmlFor="customCheck1">Remember Me</label>
                        </div>
                        <div className="form-group mt-3">
                            <button className="btn btn-block btn-outline-dark" type="submit" onClick={(e) => handleSubmit(e)}>
                                Signup
                            </button>
                        </div>
                    </form>
                </div>
                <NavLink to="/login" className="text-center d-block">Already a member? Login now!</NavLink>
            </div>
        </div>
    )
}

export default Signup;
