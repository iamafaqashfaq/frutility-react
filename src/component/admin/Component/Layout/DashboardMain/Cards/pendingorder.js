import React, { useState, useEffect } from 'react'
import Axios from 'axios'
export default function Pendingorder() {
    const [pendingOrders, setPendingOrders] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            Axios({
                method: 'get',
                url: `https://localhost:44376/api/orders/pendingorderscount`,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
                }
            }).then(res => {
                setPendingOrders(res.data)
            }).catch(err => console.error(err))
        }, 3000);
    }, [pendingOrders])
    return (
        <div className="card bg-danger">
            <div className="card-body text-capitalize text-center align-items-center">
                <i className="card-title fa fa-shopping-cart fa-3x"></i>
                <h3 className="card-text">
                    Pending Orders
                    <span className="badge badge-warning">
                        {pendingOrders}
                    </span>
                </h3>
            </div>
        </div>
    )
}
