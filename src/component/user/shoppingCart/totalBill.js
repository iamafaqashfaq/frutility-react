import React, { useEffect, useState, useRef } from 'react'

const TotalBill = (props) => {
    const [bill, setBill] = useState(0)
    const prevProps = useRef()
    useEffect(() => {
        prevProps.current = props.products
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (prevProps.current === props.products) {
            Array(...props.products).map(product => {
                return (
                    setBill(bill => bill + (product.quantity * product.products.price))
                )
            })
        }
        else {
            setBill(0)
            Array(...props.products).map(product => {
                return (
                    setBill(bill => bill + (product.quantity * product.products.price))
                )
            })
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.products])
    const handleModal = () => {
        props.modal(true)
        props.sendBill(bill)
    }
    return (
        <div className="p-4 rounded bg-secondary d-inline-block text-white">
            <h4 className="d-inline-block mr-5">Cart Total</h4>
            <h5 className="d-inline-block ml-5">{bill}.00PKR</h5>
            <button className="btn btn-block btn-outline-success text-white font-weight-bold" onClick={() => handleModal()}>
                Checkout
            </button>
        </div>
    )
}
export default TotalBill;
