import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function Dodayorder() {
    const [todayOrders, setTodayOrders] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            Axios({
                method: 'get',
                url: `https://localhost:44376/api/orders/todayorderscount`,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
                }
            }).then(res => {
                setTodayOrders(res.data)
            }).catch(err => console.error(err))
        }, 3000);
    }, [todayOrders])
    return (
        <div className="card bg-success">
            <div className="card-body text-capitalize text-center align-items-center">
                <i className="card-title fa fa-cart-arrow-down fa-3x"></i>
                <h3 className="card-text">
                    Today Orders&nbsp;
                    <span className="badge badge-primary">
                        {todayOrders}
                    </span>
                </h3>
            </div>
        </div>
    )
}
