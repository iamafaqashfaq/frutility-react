import React,{ useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserOrderCount } from '../../Requests/UserRequestPayload';
import { USERORDERCOUNT } from '../../../../store/action/UserAction';

const CartIcon = () => {
    const cartcount = useSelector(state => state.cartcount.count)
    const dispatch = useDispatch()
    useEffect(()=>{
        const response = getUserOrderCount()
        response.then(res => {
            if (res.data !== false) {
                dispatch(USERORDERCOUNT(res.data))
            }
        })
    }, [cartcount, dispatch])
    return (
        <NavLink to="/cart">
            <i className="fa fa-shopping-cart nav-cart fa-2x nav-link">
                <sup>
                    <span className="badge badge-info">{cartcount}</span>
                </sup>
            </i>
        </NavLink>
    )
}

export default CartIcon;
