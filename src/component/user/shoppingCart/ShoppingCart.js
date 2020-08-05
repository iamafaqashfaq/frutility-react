import React, { useState, useEffect } from 'react'
import { getShoppingCartItems, removeShoppingCartItem } from './../Requests/UserRequestPayload'
import TotalBill from './totalBill'
import './shoppingCart.css'
import { NavLink } from 'react-router-dom';

const ShoppingCart = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const response = getShoppingCartItems()
        response.then(res => {
            if (res.data !== false) {
                console.log(res.data)
                setProducts(res.data)
            }
        })
    }, [])
    const RemoveOrder = (id) => {
        console.log(id)
        const response = removeShoppingCartItem(id)
        response.then(res => {
            console.log(res)
            if(res.data === true){
                let data = products
                console.log(products)
                console.log(data)
                let removeIndex = data.map(item => {
                    return item.id
                }).indexOf(id)
                data.splice(removeIndex,1)
                console.log(data)
                setProducts(Array(...data))
                console.log(products)
            }
        })
    }
    return (
        <div>
            <h3 className="text-center m-auto rounded-pill p-4 bg-dark text-white w-75">
                Shopping Cart
            </h3>
            <div className="container shopping-cart mt-4">
                <div>
                    <table>
                        <thead>
                            <tr className="cart-table-heading">
                                <th className="cart-table-sub-heading">Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length !== 0 ? (
                                products.map(product => {
                                    return (
                                        <tr key={product.id}>
                                            <td className="product-name">
                                                <img src={"data:image/jpeg;base64," + product.imageBytes}
                                                    alt="productimage" width="150px" className="img-thumbnail" />
                                                <h5>{product.products.name}</h5>
                                            </td>
                                            <td className="product-price">
                                                {product.products.price}
                                            </td>
                                            <td className="product-quantity">
                                                {product.quantity}
                                            </td>
                                            <td className="product-total-price">
                                                {product.quantity * product.products.price}
                                            </td>
                                            <td><i className="btn fa fa-times fa-2x" onClick={() => RemoveOrder(product.id)}></i></td>
                                        </tr>
                                    )
                                })
                            ) : <tr><td><p className="lead">Cart is Empty</p></td></tr>}
                        </tbody>
                    </table>
                </div>
                <TotalBill products={products}/>
                <NavLink to="/" className="w-100 ml-auto">
                    <button className="btn btn-outline-secondary d-inline-block">Continue Shopping</button>
                </NavLink>
            </div>
        </div>
    )
}

export default ShoppingCart;
