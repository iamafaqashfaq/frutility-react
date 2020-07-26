import React, { useEffect, useState } from 'react'
import { getMinProducts } from './../../../Requests/UserRequestPayload';
import Auxillary from '../../../../hoc/auxillary';

const SubcategoryProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const response = getMinProducts()
        response.then(res => {
            if (res) {
                const newList = Array(...res.data).filter(item => {
                    const lc = item.subCategoryID
                    return String(lc).includes(props.match.params.id)
                })
                console.log(newList)
                setProducts(newList)
            }
        })
    }, [props.match.params.id])
    return (
        (products.length === 0 ? (<p>Loading...</p>) :
            (<Auxillary>
                {products.map(product => {
                    return (
                        <div className="col-md-2 col-lg-2 animate__animated
                             animate__fadeInDown products-container" key={product.id}>
                            <div className="product-img-div hvr-shrink">
                                <img src={'data:image/jpeg;base64,' + product.imageBytes} 
                                alt="logo" className="product-picture" />
                            </div>
                            <p className="text-center product-name">{product.name}</p>
                            <p className="text-center product-price"><b>{'PKR ' + product.price}</b></p>
                        </div>
                    )
                })}
            </Auxillary>)
        )
    )
}

export default SubcategoryProducts;
