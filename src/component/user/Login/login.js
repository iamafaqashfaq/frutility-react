import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="m-5 animate__animated animate__backInLeft">
            <div className="container m-auto w-50">
                <h4 className="bg-dark rounded-pill 
                p-3 m-auto align-content-center 
                text-center text-white w-50">Login</h4>
                <form className="w-50 m-auto">
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder="Enter Username" 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" placeholder="Enter Password" 
                        className="form-control" />
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" 
                        id="customCheck1" />
                        <label htmlFor="RememberMe" className="custom-control-label" 
                        for="customCheck1">Remember Me</label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block btn-outline-dark" type="submit">Login</button>
                    </div>
                </form>
                <NavLink to="/signup" className="text-center d-block">Not a member? SignIn now!</NavLink>
            </div>
        </div>
    )
}

export default Login;
