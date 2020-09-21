import React, { useState, useEffect } from 'react'
import { getProducts } from './../Requests/UserRequestPayload';
import Auxillary from './../../hoc/auxillary';
import { NavLink } from 'react-router-dom';

const SearchProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const response = getProducts()
        response.then(res => {
            if (res) {
                const newList = Array(...res.data).filter(item => {
                    const lc = item.name
                    return String(lc).includes(props.match.params.name)
                })
                setProducts(newList)
            }
        })
    }, [props.match.params.name])
    return (
        <Auxillary>
            <div className="container-fluid subcategory-products">
                <div className="row justify-content-center mt-3">
                    <div className="col-md-10 col-lg-10">
                        {(products.length === 0 ? (<p className="lead text-center p-5 m-5">Search not found...</p>) :

                            products.map(product => {
                                return (
                                    <NavLink to={"/product/" + product.id + "/details"} key={product.id}>
                                        <div className="col-md-2 col-lg-2 animate__animated
                                            animate__fadeInDown products-container">
                                            <div className="product-img-div hvr-shrink">
                                                <img src={product.imageURI}
                                                    alt="logo" className="product-picture" />
                                            </div>
                                            <p className="text-center product-name">
                                                {product.name}
                                            </p>
                                            <p className="text-center product-price">
                                                <b>{product.price + '.00PKR'}</b>
                                            </p>
                                        </div>
                                    </NavLink>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>

        </Auxillary>
    )
}

export default SearchProducts;
