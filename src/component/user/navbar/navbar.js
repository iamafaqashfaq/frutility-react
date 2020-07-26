import React from 'react'
import { NavLink } from "react-router-dom"
import Navheader from '../../Navheader/navheader';
import brandlogo from '../../../assets/frutilitylogo.png'
import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <Navheader />
            <div id="nav" className="container-fluid">
                <nav className="navbar navbar-expand-md bg-white navbar-light">
                    <NavLink to="/" className="navbar-brand ml-5">
                        <img src={brandlogo} alt="Frutility" width="100px" />
                    </NavLink>
                    <button className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarcollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarcollapse">
                        <form className="form-inline ml-auto search-form">
                            <input type="text" className="nav-search" placeholder="Search"/>
                            <button className="hvr-grow fruity-btn search-btn">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/categories" className="nav-link" activeClassName="active">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/freshitems" className="nav-link">Fresh Stock</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}