import React from 'react'
import CustomersTable from './CustomersTable'
import CustomersFilter from './CustomerFilter'

export const CustomerUI = () => {
    return (
        <div className="mt-5 ml-5">
            <div className="border rounded bg-light p-3">
                <h5>Manage Customers</h5>
            </div>
            <CustomersFilter/>
            <CustomersTable/>
        </div>
    )
}
export default CustomerUI
