import React, { useEffect, useState } from 'react'

const TotalBill = (props) => {
    const [bill, setBill] = useState(0)
    useEffect(() => {
        Array(...props.products).map(product => {
            console.log(product)
            return (
                setBill(bill => bill+(product.quantity * product.products.price))
            )
        })
    }, [props.products])
    return (
        <div className="p-4 rounded bg-secondary d-inline-block m-4 text-white">
            <h4 className="d-inline-block mr-5">Cart Total</h4>
            <h5 className="d-inline-block ml-5">{bill}.00PKR</h5>
            <button className="btn btn-block btn-outline-dark text-white font-weight-bold">Checkout</button>
        </div>
    )
}
export default TotalBill;
