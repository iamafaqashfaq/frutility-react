import React, { useEffect, useState } from 'react'
import Auxillary from './../../../../hoc/auxillary';
import { getProducts } from './../../../Requests/UserRequestPayload';
import { NavLink } from 'react-router-dom';


const Featuredproducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const response = getProducts()
        response.then(res => {
            if (res) {
                setProducts(res.data)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        (products.length === 0 ? (<p>Loading...</p>) :
            (<Auxillary>
                {products.map(product => {
                    return (
                        <div className="col-md-2 col-lg-2 animate__animated
                             animate__backInRight products-container" key={product.id}>
                                 <NavLink to={'/product/'+product.id+'/details'}>
                            <div className="product-img-div hvr-shrink">
                                <img src={'data:image/jpeg;base64,' + product.imageBytes} 
                                alt="logo" className="product-picture" />
                            </div>
                            <p className="text-center product-name">{product.name}</p>
                            <p className="text-center product-price"><b>{product.price+'.00PKR'}</b></p>
                            </NavLink>
                        </div>
                    )
                })}
            </Auxillary>)
        )

    )
}
export default Featuredproducts;
