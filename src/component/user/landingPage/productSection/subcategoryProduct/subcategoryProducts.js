import React, { useEffect, useState } from 'react'
import { getProducts } from './../../../Requests/UserRequestPayload';
import Auxillary from '../../../../hoc/auxillary';
import { NavLink } from 'react-router-dom';
import Sidebar from './../../sidebar/sidebar';
import './subcategoryProduct.css'

const SubcategoryProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const response = getProducts()
        response.then(res => {
            if (res) {
                const newList = Array(...res.data).filter(item => {
                    const lc = item.subCategoryID
                    return Boolean(String(lc) === (props.match.params.id))
                })
                setProducts(newList)
            }
        })
    }, [props.match.params.id])
    return (
        <Auxillary>
            <div className="container-fluid subcategory-products">
                <div className="row justify-content-center mt-3">
                    <div className="col-md-2 col-lg-2">
                        <Sidebar bounce="" />
                    </div>
                    <div className="col-md-10 col-lg-10">
                        {(products.length === 0 ? (<p>Loading...</p>) :

                            products.map(product => {
                                return (
                                    <NavLink to={"/product/" + product.id + "/details"}  key={product.id}>
                                        <div className="col-md-2 col-lg-2 animate__animated
                                            animate__fadeInDown products-container">
                                            <div className="product-img-div hvr-shrink">
                                                <img src={'data:image/jpeg;base64,' + product.imageBytes}
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

export default SubcategoryProducts;
