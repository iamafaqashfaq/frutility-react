import React from 'react'

export default function Pendingorderdetail() {
    return (
        <div className="mt-4 ml-4">
            <div className="card text-center align-content-center align-items-center">
                <div className="card-body">
                    <div className="card-title"><h5>Pending Orders</h5></div>
                    <div className="card-text">
                        <div className="table">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
