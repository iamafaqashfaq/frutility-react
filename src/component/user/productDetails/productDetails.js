import React, { useState, useEffect } from 'react'
import { getProductById } from '../Requests/UserRequestPayload'
import './productDetails.css'
import RelatedProducts from './relatedProducts/relatedProducts'
import ProductAddToCart from './productAddToCart'

const ProductDetails = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const response = getProductById(props.match.params.id)
        response.then(res => {
            setProduct(res.data)
        })
    }, [props.match.params.id])

    return (
        <div className="container animate__animated animate__bounceIn">
            <h3 className="text-center bg-dark p-4 m-3 rounded-pill text-white">Product Details</h3>
            <div className="row product-details">
                <div className="col-md-5 col-lg-5 offset-md-1 offset-lg-1 align-self-center">
                    <img src={"data:image/jpeg;base64," + product.imageBytes} alt="productimage"
                        className="img-thumbnail" />
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
                    <div className="product-description mb-3">
                        {product.description}
                    </div>
                    <ProductAddToCart product={product} />
                    <hr />
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <p>Vendor</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <p>{product.vendor}</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <p>Availability</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            {product.availability ? <p>In Stock ({product.stock} pieces)</p> : <p>Out of Stock</p>}
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <p>Shipping</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <p>{product.shippingCharges}.00PKR</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <p>Weight</p>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <p>{product.packageWeight} kg</p>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts subCategoryID={product.subCategoryID} />
        </div>
    )
}

export default ProductDetails;
