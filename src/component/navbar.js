import React from 'react'
import { NavLink } from "react-router-dom"
import Navheader from './Navheader/navheader';
import brandlogo from '../assets/FrutilityPortrait.png'

export default function navbar() {
    return (
        <div>
            <Navheader />
            <div id="nav" className="container">
                <nav className="navbar navbar-expand-md bg-white navbar-light">
                    <NavLink to="/" className="navbar-brand ml-5">
                        <img src={brandlogo} alt="Frutility" width="100px"/>
                    </NavLink>
                    <button className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarcollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarcollapse">
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