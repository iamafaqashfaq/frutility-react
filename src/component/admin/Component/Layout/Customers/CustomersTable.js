import React, { useEffect, useState } from 'react'
import { getCustomersList } from './../Requests/RequestPayloads';

export const CustomersTable = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const response = getCustomersList()
        try{
            response.then(res => {
                if(res){
                    setCustomers(res.data)
                }
            })
        }
        catch(error){
            console.error(error)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="table-responsive-md">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Shipping Address</th>
                        <th>Billing Address</th>
                        <th>Reg. Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!customers ? <p>Loading....</p> : (
                        customers.map(customer => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.userName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.shippingAddress},
                                        {customer.shippingCity},
                                        {customer.shippingState}
                                    </td>
                                    <td>{customer.billingAddress},
                                        {customer.billingCity},
                                        {customer.billingState}
                                    </td>
                                    <td>{customer.regDate}</td>
                                    <td>
                                        <i className="fa fa-pencil-square-o 
                                            fa-lg btn btn-link text-decoration-none">
                                        </i>
                                        <i className="fa fa-trash-o fa-lg btn btn-link text-decoration-none">
                                        </i>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default CustomersTable