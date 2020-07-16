import React from 'react'

export const CustomersTable = () => {
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
            </table>
        </div>
    )
}
export default CustomersTable