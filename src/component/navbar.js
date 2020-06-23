import React from 'react'

export default function navbar() {
    return (
        <div id="nav" className="container">
            <nav className="navbar navbar-expand-md bg light navbar-light">
                <a href="google.com" className="navbar-brand"><h3>Frutility</h3></a>
                <button className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarcollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="fb.com" className="nav-link">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a href="daraz.pk" className="nav-link">Fresh Stock</a>
                        </li>
                        <li className="nav-item">
                            <a href="don.pk" className="nav-link">About Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}