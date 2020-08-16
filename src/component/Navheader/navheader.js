import React from 'react'
import './navheader.css'
import { NavLink } from 'react-router-dom';

const Navheader = () => {
    return (
        <div className="bg-light d-none d-sm-none d-md-none d-lg-block">
            <div className="container-fluid">
                <div id="nav-header-top" className="row justify-content-center">
                    <div className="col-md-6 col-lg-6 left-header">
                        <div className="header-top-left">
                            <ul>
                                <li>
                                    <i className="fa fa-envelope"></i>&nbsp;
                                    <a href="mailto:hello@frutility.com" className="text-decoration-none text-dark">
                                        hello@frutility.com
                                    </a>
                                </li>
                                <li className="dividerRight"></li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 right-header">
                        <div className="headerTopRight">
                            <ul>
                                <li><i className="fa fa-facebook-f"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-pinterest-p"></i></li>
                                <li><i className="fa fa-youtube-play"></i></li>
                                <li className="dividerRight"></li>
                                <NavLink to="/signup" className="text-dark"><li><i className="fa fa-users"></i>&nbsp; Signup</li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navheader;