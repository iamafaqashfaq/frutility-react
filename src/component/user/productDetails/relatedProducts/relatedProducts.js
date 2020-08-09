import React, { useState, useEffect } from 'react'
import { getProducts } from './../../Requests/UserRequestPayload';
import { NavLink, Route } from 'react-router-dom';

const RelatedProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const response = getProducts()
        response.then(res => {
            const newList = Array(...res.data).filter(item => {
                const lc = item.subCategoryID
                return String(lc).includes(props.subCategoryID)
            })
            setProducts(newList)
        })
    }, [props.subCategoryID])
    return (
        <div className="container">
            <Route path="/product/:id/details/related" exact>
            <div className="row">
                {products.length === 0 ? <p>Loading...</p> : products.slice(0, 3).map(product => {
                    return (
                        <div className="col-md-2 col-lg-2 animate__animated
                             animate__backInLeft products-container" key={product.id}>
                            <NavLink to={'/product/' + product.id + '/details'}>
                                <div className="product-img-div hvr-shrink">
                                    <img src={'data:image/jpeg;base64,' + product.imageBytes}
                                        alt="logo" className="product-picture" />
                                </div>
                                <p className="text-center product-name">{product.name}</p>
                                <p className="text-center product-price"><b>{product.price + '.00PKR'}</b></p>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            </Route>
        </div>
    )
}

export default RelatedProducts;
