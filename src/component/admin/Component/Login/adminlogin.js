import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADMINLOGIN } from '../../../../store/action/AdminActions'
import axios from 'axios'
import './adminlogin.css'
import Dashboard from '../Layout/admindashboard'

export default function Adminlogin() {
    const dispatch = useDispatch()
    const redux = useSelector(state => state.adminlogin.isLoggedin)
    const [model, setModel] = useState({
        UserName: '',
        Password: ''
    })

    useEffect(() => {
        const token = localStorage.getItem("admintoken")
        if (token) {
            axios({
                method: 'post',
                url: `https://localhost:44376/api/usercontroller/checkuser`,
                data: {
                    entoken: token
                },
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                let data = res.data
                console.log('Login Token Check')
                console.log(data)
            }).catch(err => console.error(err))
            dispatch(ADMINLOGIN());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //Set USERNAME FROM FORM INPUT
    const setUsername = (e) => {
        setModel({
            ...model,
            UserName: e
        })
    }
    //SET PASSWORD FROM FORM INPUT
    const setPassword = (e) => {
        setModel({
            ...model,
            Password: e
        })
    }
    //SUBMIT LOGIN DATA TO SERVER AND SET TO REDUX STATE
    const sendLoginData = (event) => {
        event.preventDefault()
        let Login
        axios.post(`https://localhost:44376/api/usercontroller/adminlogin`, model,
            { withCredentials: true })
            .then(response => {
                console.log(response)
                Login = response.data
                if (Login !== false) {
                    localStorage.setItem("admintoken", Login.entoken)
                    localStorage.setItem("adminusername", Login.userName)
                    dispatch(ADMINLOGIN())
                }
            }).catch(err => console.error(err))
    }
    const loginForm = (
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
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" className="form-control"
                                    placeholder="password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button className="btn btn-outline-secondary btn-md 
                    btn-block mb-3" onClick={sendLoginData}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
    return ((redux ? <Dashboard /> : loginForm))
}
