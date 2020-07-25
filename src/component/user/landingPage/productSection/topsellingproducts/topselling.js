import React, { useState, useEffect } from 'react'
import { getMinProducts } from './../../../Requests/UserRequestPayload';

const Topselling = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const response = getMinProducts()
        response.then(res => {
            if (res) {
                const data = Array(...res.data)
                setProducts(data.slice(0,3))
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h3 className="text-center 
                            tracking-in-contract-bck mb-5">
                Top Selling Products
            </h3>
            <div className="row justify-content-center">
                {products.length === 0 ? (<p>Loading...</p>) : (products.map(product => {
                    return (
                        <div className="col-md-2 col-lg-2 animate__animated
                             animate__fadeInDown products" key={product.id}>
                            <div className="productimg hvr-shrink">
                                <img src={'data:image/jpeg;base64,' + product.imageBytes}
                                 alt="logo" className="product-picture" />
                            </div>
                            <p className="text-center product-name">{product.name}</p>
                            <p className="text-center"><b>{'PKR ' + product.price}</b></p>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}

export default Topselling;
