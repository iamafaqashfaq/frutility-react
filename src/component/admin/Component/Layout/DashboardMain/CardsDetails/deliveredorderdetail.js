import React from 'react'

export default function Deliveredorderdetail() {
    return (
        <div className="mt-4 ml-4">
            <div className="card text-center align-content-center align-items-center">
                <div className="card-body">
                    <div className="card-title"><h5>Delivered Orders</h5></div>
                    <div className="card-text">
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email/Contact No</th>
                                        <th>Shipping Address</th>
                                        <th>Product</th>
                                        <th>Qty</th>
                                        <th>Amount</th>
                                        <th>Order Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
