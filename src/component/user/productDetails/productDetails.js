import React, { useState, useEffect } from 'react'
import { getProductById } from '../Requests/UserRequestPayload'
import './productDetails.css'

const ProductDetails = (props) => {
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        const response = getProductById(props.match.params.id)
        response.then(res => {
            setProduct(res.data)
        })
    }, [props.match.params.id])
    return (
        <div className="container product-details animate__animated animate__bounceIn">
            <h3 className="text-center bg-dark p-4 m-3 rounded-pill text-white">Product Details</h3>
            <div className="row">
                <div className="col-md-5 col-lg-5 offset-md-1 offset-lg-1 align-self-center">
                    <img src={"data:image/jpeg;base64," + product.imageBytes} alt="productimage" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <h3 className="text-capitalize">{product.name}</h3>
                    <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <span>&nbsp;(188 reviews)</span>
                    </div>
                    <div className="product-price">
                        {product.price}.00PKR
                    </div>
                    <div className="product-description">
                        {product.description}
                    </div>
                    <div className="d-flex">
                        <div className="product-counter d-flex">
                            <button className="btn decrement pr-3 pl-3" onClick={()=>setCount(count-1)}>-</button>
                            <p className="count pr-4 pl-4">{count}</p>
                            <button className="btn increment pr-3 pl-3" onClick={()=>setCount(count+1)}>+</button>
                        </div>
                        <button className="btn cart-button ml-2">Add To Cart</button>
                        <button className="btn ml-2 wishlist-btn"><i className="fa fa-heart fa-1x"></i></button>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <p>Availability</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            {product.availability ? <p>In Stock</p> : <p>Out of Stock</p>}
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <p>Shipping</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            {product.shippingCharges}
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <p>Weight</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            {product.packageWeight} kg
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
