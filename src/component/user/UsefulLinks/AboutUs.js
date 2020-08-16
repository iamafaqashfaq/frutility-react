import React from 'react'
import './UsefullLinks.css'
import customerimg from '../../../assets/customers.webp'

const AboutUs = () => {
    return (
        <div className="container about-us animate__animated animate__backInRight">
            <div className="jumbotron text-uppercase display-4 text-center community">
                Frutility is a mall, a marketplace and a community
            </div>
            <h3 className="text-center">Who we are</h3>
            <p className="blockquote text-center text-justify">Frutility is the leading marketplace in South Asia,
            empowering tens of thousands of sellers to connect with
                millions of customers. <br />
                Frutility is a mall, a marketplace and a community for its customers.
                It is also a university for enterpreneurs and every month it educates
                more than 5,000 new sellers on e-commerce operations</p>
            <div className="jumbotron text-uppercase text-left mission">
                <h2>Our Mission</h2>
                <p className="lead">Make it easy to do business anywhere <br /> in the
                era of the digital economy</p>
            </div>
            <div className="jumbotron text-uppercase text-left customers display-4">
                Our promise to customers
            </div>
            <div>
                <img src={customerimg} alt="customerspromise"/>
            </div>
        </div>
    )
}

export default AboutUs;
