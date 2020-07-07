import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Deliveredorder() {
    const [deliveredOrders, setDeliveredOrders] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            Axios({
                method: 'get',
                url: `https://localhost:44376/api/orders/deliveredorderscount`,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
                }
            }).then(res => {
                setDeliveredOrders(res.data)
            }).catch(err => console.error(err))
        }, 3000);
    }, [deliveredOrders])
    return (
        <div className="card bg-info">
            <div className="card-body text-capitalize align-content-center text-center">
                <i className="card-title fa fa-truck fa-3x"></i>
                <h3 className="card-text">
                    Delivered Orders 
                    <span className="badge badge-danger">
                        {deliveredOrders}
                    </span>
                </h3>
            </div>
        </div>
    )
}
