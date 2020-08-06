import React, { useState, useEffect } from 'react'
import { getShoppingCartItems, removeShoppingCartItem, getUserOrderCount } from './../Requests/UserRequestPayload'
import TotalBill from './totalBill'
import './shoppingCart.css'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { USERORDERCOUNT } from './../../../store/action/UserAction';
import { useToasts } from 'react-toast-notifications';
import PaymentConfirmation from './paymentConfirmation';

const ShoppingCart = () => {
    const { addToast } = useToasts()
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(false)
    const [bill, setBill] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        const response = getShoppingCartItems()
        response.then(res => {
            if (res.data !== false) {
                setProducts(res.data)
            }
        })
    }, [])
    const RemoveOrder = (id) => {
        const response = removeShoppingCartItem(id)
        response.then(res => {
            if (res.data === true) {
                let data = products
                let removeIndex = data.map(item => {
                    return item.id
                }).indexOf(id)
                data.splice(removeIndex, 1)
                setProducts(Array(...data))
                const response = getUserOrderCount()
                response.then(res => {
                    if (res.data !== false) {
                        dispatch(USERORDERCOUNT(res.data))
                        addToast('Order Removed', {
                            appearance: 'error',
                            autoDismiss: true
                        })
                    }
                })
            }
        })
    }
    return (
        <div className="mb-5">
            <PaymentConfirmation modal={modal} hide={setModal} product={products} bill={bill}/>
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
                                                <NavLink to={"/product/"+product.products.id+"/details"}>
                                                    <img src={"data:image/jpeg;base64," + product.imageBytes}
                                                        alt="productimage" width="150px" className="img-thumbnail" />
                                                    <h5>{product.products.name}</h5>
                                                </NavLink>
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
                                            <td>
                                                <i className="btn fa fa-times fa-2x"
                                                    onClick={() => RemoveOrder(product.id)}>
                                                </i>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : <tr><td><p className="lead">Cart is Empty</p></td></tr>}
                        </tbody>
                    </table>
                </div>
                <div className="row justify-content-between mt-4">
                    <div className="col-md-7 col-lg-7">
                        
                        {products.length !== 0 ?
                        (
                            <TotalBill products={products} modal={setModal} sendBill={setBill}/>
                        ) : null}
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <NavLink to="/">
                            <button className="btn btn-outline-secondary d-inline-block font-weight-bold">
                                Continue Shopping
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
