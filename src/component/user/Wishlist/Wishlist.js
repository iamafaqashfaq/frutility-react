import React, { useState, useEffect } from 'react'
import { getWishlist, deleteFromWishlist } from '../Requests/UserRequestPayload'
import { NavLink } from 'react-router-dom';
import './wishlist.css'

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        if (localStorage.getItem("userToken")) {
            const response = getWishlist()
            response.then(res => {
                if (res.data) {
                    setWishlist(res.data)
                }
            })
        }
    }, [])
    const handleDelete = (id) => {
        const data = {
            id: id
        }
        const response = deleteFromWishlist(data)
        response.then(res => {
            if (res.data) {
                const response = getWishlist()
                response.then(res => {
                    if (res.data) {
                        setWishlist(res.data)
                    }
                    else {
                        setWishlist([])
                    }
                })
            }
        })
    }
    return (
        <div className="container">
            <h4 className="primary-color-bg-green p-3 text-white text-center rounded-pill">Wishlist</h4>
            <div className="row justify-content-center">
                {
                    (wishlist.length === 0 ? <p className="lead text-center">Wishlist is empty</p> : (
                        wishlist.map(list => {
                            return (
                                <div className="col-md-3 col-lg-3 animate__animated
                                     animate__backInRight products-container" key={list.id}>
                                    <NavLink to={'/product/' + list.productId + '/details'}>
                                        <div className="text-center">
                                            <div className="product-img-div hvr-shrink">
                                                <img src={'data:image/jpeg;base64,' + list.imageBytes}
                                                    alt="logo" className="product-picture" />
                                            </div>
                                            <p className="product-name">{list.productName}</p>
                                            <p className="product-price">
                                                <b>{list.productPrice + '.00PKR'}</b>
                                            </p>
                                        </div>
                                    </NavLink>
                                    <button className="btn wishlist-del hvr-back-pulse" onClick={() => handleDelete(list.id)}>
                                        <i className="fa fa-trash-o fa-2x"></i>
                                    </button>
                                </div>
                            )
                        })
                    ))
                }
            </div>
        </div>
    )
}

export default Wishlist;
