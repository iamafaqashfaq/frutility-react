import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { postOrder, addToWishlist } from './../Requests/UserRequestPayload';
import { useDispatch } from 'react-redux';
import { USERORDERINCREMENT } from './../../../store/action/UserAction';
import { useToasts } from 'react-toast-notifications'

const ProductAddToCart = (props) => {
    const dispatch = useDispatch()
    const { addToast } = useToasts()
    const [count, setCount] = useState(0)
    const handleDecrement = async () => {
        if (count > 0) {
            await setCount(count - 1)
        }
    }
    const handleIncrement = async () => {
        if (count < props.product.stock) {
            await setCount(count + 1)
        }
    }
    const history = useHistory()
    const hanldeAddCart = async () => {
        if (count === 0) {
            window.alert('Set quantity to add into cart')
        }
        else {
            if (localStorage.getItem('userToken') === null) {
                history.push('/login')
            }
            else {
                const data = {
                    productId: props.product.id,
                    quantity: count
                }
                const response = postOrder(data)
                response.then(res => {
                    if (res.data !== false) {
                        dispatch(USERORDERINCREMENT(count))
                        addToast('Added To The Cart', {
                            appearance: 'success',
                            autoDismiss: 'true'
                        })
                        props.repost()
                    }
                    else{
                        addToast("Product Out Of Stock",{
                            appearance: 'error',
                            autoDismiss: true
                        })
                    }
                })
            }
        }
    }
    const submitToWishlist = () => {
        const data = {
            productId: props.product.id
        }
        if (localStorage.getItem("userToken")) {
            const response = addToWishlist(data)
            response.then(res => {
                if (res.data) {
                    addToast("Added to wishlist", {
                        appearance: 'success',
                        autoDismiss: true
                    })
                }
                else {
                    addToast("Could not add to wishlist", {
                        appearance: 'error',
                        autoDismiss: false
                    })
                }
            })
        }else{
            history.push('/login')
        }
    }
    return (
        <div>
            <div className="d-flex">
                <div className="product-counter d-flex">
                    <button className="btn decrement pr-3 pl-3" onClick={() => handleDecrement()}>-</button>
                    <p className="count pr-4 pl-4">{count}</p>
                    <button className="btn increment pr-3 pl-3" onClick={() => handleIncrement()}>+</button>
                </div>
                <button className="btn cart-button ml-2" onClick={() => hanldeAddCart()}>Add To Cart</button>
                <button className="btn ml-2 wishlist-btn" onClick={() => submitToWishlist()}>
                    <i className="fa fa-heart fa-1x"></i>
                </button>
            </div>
        </div>
    )
}

export default ProductAddToCart;
