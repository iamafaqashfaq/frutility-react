import React from 'react'
import ServiceImg from '../../../assets/servicedetails.webp'

const OurServices = () => {
    return (
        <div className="container our-services mb-5 animate__animated animate__backInRight">
            <div className="jumbotron service">
                <h1 className="display-3">Our Services</h1>
            </div>
            <img src={ServiceImg} alt="services" className="img-fluid"/>
        </div>
    )
}

export default OurServices;
