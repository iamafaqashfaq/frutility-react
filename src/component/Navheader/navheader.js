import React from 'react'
import './navheader.css'
import lang from '../../assets/language.png'

const Navheader = () => {
    return (
        <div className="bg-light d-none d-sm-none d-md-block">
            <div className="container">
                <div id="navHeaderTop" className="row justify-content-center">
                    <div className="col-md-6 col-lg-6">
                        <div className="headerTopLeft">
                            <ul>
                                <li>
                                    <i className="fa fa-envelope"></i>&nbsp;hello@frutility.com
                        </li>
                                <li className="dividerRight"></li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 rightHeader">
                        <div className="headerTopRight">
                            <ul>
                                <li><i className="fa fa-facebook-f"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-pinterest-p"></i></li>
                                <li><i className="fa fa-youtube-play"></i></li>
                                <li className="dividerRight"></li>
                                <li className="flagimage"><img src={lang} alt="Language" />&nbsp; English</li>
                                <li className="dividerRight"></li>
                                <li><i className="fa fa-user"></i>&nbsp; Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navheader;