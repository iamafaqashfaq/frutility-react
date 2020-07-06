import React, { Component } from 'react'
import axios from 'axios'
import '../Cards/card.css'

export default class Todayorderdetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderDetails: []
        }
    }
    componentWillMount() {
        axios({
            method: "post",
            url: 'https://localhost:44376/api/orders/todayorders',
            data: {
                'entoken': localStorage.getItem('token')
            },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            this.setState({ orderDetails: response.data })
            console.log(this.state.orderDetails[0])
        }).catch(err => console.error(err))
    }
    render() {
        const detailsData = this.state.orderDetails.map(order => {
            return (
                <tr>
                    <td>{order.id}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{order.address}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.amount}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.paymentMethod}</td>
                </tr>
            )
        })

        return (
            <div id="todayorders" className="mt-4 ml-4 p-4">
                        <div className="m-auto text-center p-2"><h5>Today Orders</h5></div>
                        <div className="table-responsive-md">
                            <table className="card-table table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact No</th>
                                        <th>Shipping Address</th>
                                        <th>Product</th>
                                        <th>Qty</th>
                                        <th>Amount</th>
                                        <th>Order Date</th>
                                        <th>Payment Method</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detailsData}
                                </tbody>
                            </table>
                        </div>
                    </div>
        )
    }
}


