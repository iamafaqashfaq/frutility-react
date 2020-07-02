import React from 'react'
import {Link} from "react-router-dom"

export default function navbar() {
    return (
        <div id="nav">
            <nav className="navbar navbar-expand-md bg-light navbar-light">
                <Link to="/" className="navbar-brand ml-5"><h3>Frutility</h3></Link>
                <button className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarcollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/categories" className="nav-link">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/freshitems" className="nav-link">Fresh Stock</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}