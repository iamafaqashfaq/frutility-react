import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useHistory } from "react-router-dom"
import Navheader from '../../Navheader/navheader';
import brandlogo from '../../../assets/frutilitylogo.png'
import './navbar.css'
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from './CartIcon/CartIcon';
import { USERLOGIN, USERLOGOUT } from './../../../store/action/UserAction';
import { signout } from '../Requests/UserRequestPayload';

export default function Navbar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const searchInput = useRef()
    const [togglerClass, setTogglerClass] = useState(['collapse', 'navbar-collapse'])
    const [loginButton, setLoginButton] = useState(
        <NavLink to="/login" className="nav-link">
            <i className="fa fa-user fa-2x"></i>
        </NavLink>
    )
    const [signoutButton, setSignoutButton] = useState(null)
    const IsLoggedIn = useSelector(state => state.userlogin.isLoggedIn)
    const handleToggler = () => {
        if (togglerClass.includes('collapse')) {
            setTogglerClass(['navbar-collapse'])
        }
        else {
            setTogglerClass(['collapse', 'navbar-toggler'])
        }
    }

    useEffect(() => {
        if (localStorage.getItem('userUserName') !== null) {
            setLoginButton(
                <NavLink to="/account" className="nav-link">
                    <i className="fa fa-user fa-2x"></i> <span>{localStorage.getItem('userUserName')}</span>
                </NavLink>
            )
            dispatch(USERLOGIN())
            setSignoutButton(
                <NavLink to="/" onClick={() => handleSignout()} className="nav-link sign-out">
                    <i className="fa fa-sign-out fa-2x"></i> <span>Signout</span>
                </NavLink>
            )
        }
        else {
            setLoginButton(
                <NavLink to="/login" className="nav-link">
                    <i className="fa fa-user fa-2x"></i>
                </NavLink>
            )
            setSignoutButton(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [IsLoggedIn, dispatch])


    const handleSignout = () => {
        const response = signout()
        response.then(res => {
            if (res.data) {
                localStorage.removeItem('userUserName')
                localStorage.removeItem('userToken')
                dispatch(USERLOGOUT())
            }
        })
    }
    const handleSearch = (e) => {
        e.preventDefault()
        if (searchInput.current.value === "") {
            history.push('/')
        }
        else {
            history.push(`/search/${searchInput.current.value}`)
        }
    }
    return (
        <div>
            <Navheader />
            <nav className="site-navbar navbar-expand-md mb-3 bg-light">
                <div className="container d-flex flex-column flex-wrap flex-md-row">
                    <NavLink to="/" activeClassName="active">
                        <img src={brandlogo} alt="Frutility" width="100px" />
                    </NavLink>
                    <button className="navbar-toggler" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"
                        onClick={handleToggler}>
                        <i className="fa fa-caret-down fa-lg"></i>
                    </button>
                    <div className={togglerClass.join(' ')} id="navbarSupportedContent">
                        <form className="form-inline col-auto">
                            <input type="text" className="nav-search" placeholder="Search by Product Name" ref={searchInput} />
                            <button className="btn search-btn" onClick={(e) => handleSearch(e)}>
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                        <NavLink to="/wishlist">
                            <i className="fa fa-heart fa-2x nav-wishlist nav-link"></i>
                        </NavLink>
                        <CartIcon />
                        {loginButton}
                        {signoutButton}
                    </div>
                </div>
            </nav>
        </div>
    )
}