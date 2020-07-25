import React, { useEffect, useState } from 'react'
import Auxillary from './../../../../hoc/auxillary';
import { getMinProducts } from './../../../Requests/UserRequestPayload';


const Featuredproducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const response = getMinProducts()
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
                             animate__fadeInDown products" key={product.id}>
                            <div className="productimg hvr-shrink">
                                <img src={'data:image/jpeg;base64,' + product.imageBytes} alt="logo" className="product-picture" />
                            </div>
                            <p className="text-center product-name">{product.name}</p>
                            <p className="text-center"><b>{'PKR ' + product.price}</b></p>
                        </div>
                    )
                })}
            </Auxillary>)
        )

    )
}
export default Featuredproducts;
