import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { postOrder } from './../Requests/UserRequestPayload';

const ProductAddToCart = (props) => {
    const [count, setCount] = useState(0)
    const handleDecrement = async () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const history = useHistory()
    const hanldeAddCart = async () => {
        if (count === 0) {
            window.alert('Set quantity to add into cart')
        }
        else {
            if(localStorage.getItem('userToken') === null){
                history.push('/login')
            }
            else{
                const data = {
                    productId: props.product.id,
                    quantity: count
                }
                console.log(data)
                const response = postOrder(data)
                response.then(res => {
                    console.log(res)
                    if(res.data !== false){
                        console.log(res.data)
                    }
                })
            }   
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
                <button className="btn ml-2 wishlist-btn"><i className="fa fa-heart fa-1x"></i></button>
            </div>
        </div>
    )
}

export default ProductAddToCart;
