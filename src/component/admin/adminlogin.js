import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ADMINLOGIN } from '../../store/action/AdminActions'
import axios from 'axios'
import './adminlogin.css'

export default function Adminlogin() {
    const dispatch = useDispatch()
    const redux = useSelector(state => state.adminlogin.isLoggedin)
    const [model, setModel] = useState({
        UserName: 'Hello',
        Password: 'Hello'
    })
    useEffect(() => {
        console.log("Redux Value")
        console.log(redux)
    }, [redux])
    const setUsername = (e) => {
        setModel({
            ...model,
            UserName: e
        })
    }
    const setPassword = (e) => {
        setModel({
            ...model,
            Password: e
        })
    }
    const setLoginData = (event) => {
        event.preventDefault()
        let Login
        axios.post(`https://localhost:44376/api/usercontroller/login`, model)
            .then(res => {
                    Login = res.data
                    if(Login){
                        dispatch(ADMINLOGIN())
                    }
                }).catch(err => console.error(err))
        
    }
    return (
        <div className="container" id="adminlogin">
            <div className="row">
                <div className="card col-4 m-auto bg-light">
                    <div className="card-title mt-4">
                        <h3 className="text-center">Login</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="Username">Username</label>
                                <input type="text" className="form-control" 
                                placeholder="Username" 
                                onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control" 
                                placeholder="password" 
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button className="btn btn-outline-secondary btn-md 
                            btn-block mb-3" onClick={setLoginData}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
