import React, { useState, useEffect } from 'react'
import { getProducts } from './../../../Requests/UserRequestPayload';
import { NavLink } from 'react-router-dom';

const Topselling = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const response = getProducts()
        response.then(res => {
            if (res) {
                const data = Array(...res.data)
                setProducts(data.slice(0, 3))
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        (products.length === 0 ? null :
            <div>
                <h3 className="text-center 
                            tracking-in-contract-bck">
                    Top Selling Products
            </h3>
                <div className="row justify-content-center">
                    {products.length === 0 ? (<p>Loading...</p>) : (products.map(product => {
                        return (

                            <div className="col-md-2 col-lg-2 animate__animated
                                    animate__fadeInDown products-container" key={product.id}>
                                <NavLink to={"/product/" + product.id + "/details"}>
                                    <div className="product-img-div hvr-shrink">
                                        <img src={'data:image/jpeg;base64,' + product.imageBytes}
                                            alt="logo" className="product-picture" />
                                    </div>
                                    <p className="product-name">{product.name}</p>
                                    <p className="product-price"><b>{product.price + '.00PKR'}</b></p>
                                </NavLink>
                            </div>
                        )
                    }))}
                </div>
            </div >)
    )
}

export default Topselling;
