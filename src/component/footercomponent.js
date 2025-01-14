import React from 'react'
import brandlogo from '../assets/frutilitylogo.png'
import { NavLink } from 'react-router-dom';

export default function footercomponent() {
    return (
        <div id="footer-comp" className="bg-light">
            <div className="container">
                <div id="footer-header" className="animate__animated animate__backInLeft">
                    <h3 className="text-center p-3 text-white">Contant Us</h3>
                </div>
                <div className="row mt-5 pb-5 animate__animated animate__backInUp">
                    <div className="col-sm-12 col-md-4 col-lg-4 
                        address-details align-self-start">
                        <img src={brandlogo} alt="Frutiltiy Logo" width="150px" />
                        <p>7th Avenue Road, RYK</p>
                        <p>Phone: +92 345 867 26 40</p>
                        <p>Email: hello@frutility.com</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-md-4">
                        <h4 className="mb-md-4">Useful Links</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="p-2">
                                        <NavLink to="/aboutus"
                                            className="text-decoration-none text-dark">
                                            About Us
                                        </NavLink>
                                    </td>
                                    <td className="p-2">
                                        <NavLink to="/aboutourshop"
                                            className="text-decoration-none text-dark">
                                            About Our Shop
                                        </NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <NavLink to="/ourservices"
                                            className="text-decoration-none text-dark">
                                            Our Services
                                        </NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-md-4">
                        <h4 >Join our newsletter!</h4>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <div className="row">
                            <div className="col-md-8 col-lg-8 pr-1">
                                <input type="email" className="form-control" placeholder="Enter Your Email" />
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 pl-0 pt-1 
                                pt-sm-1 pt-md-0 ml-3 ml-sm-3 ml-md-0 btn-block">
                                <button className="fruity-btn">Subscribe</button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <i className="fa fa-facebook-official fa-lg social-link m-3 hvr-shrink"></i>
                            <i className="fa fa-twitter fa-lg social-link hvr-shrink"></i>
                            <i className="fa fa-youtube-play fa-lg social-link m-3 hvr-shrink"></i>
                            <i className="fa fa-pinterest-p fa-lg social-link hvr-shrink"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
