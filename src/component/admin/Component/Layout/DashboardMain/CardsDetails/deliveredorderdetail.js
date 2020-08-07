import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Aux from '../../../../../hoc/auxillary'
import CardDetailsModal from './cardDetailsModal';
import { updateOrderStatus } from './../../Requests/RequestPayloads';
import { useDispatch } from 'react-redux';
import { ORDERSTATUSCHANGED } from './../../../../../../store/action/AdminActions';

const Deliveredorderdetail = () => {
    const dispatch = useDispatch()
    const signal = axios.CancelToken.source()
    const remarks = useRef()
    const orderstatus = useRef()
    const [orderDetails, setOrderDetails] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [currentOrder, setCurrentOrder] = useState([])
    const [spinner, setSpinner] = useState(["fa", "fa-refresh", "fa-lg", "fa-fw"])
    useEffect(() => {
        try {
            axios({
                method: "post",
                url: 'https://localhost:44376/api/orders/deliveredorders',
                data: {
                    'entoken': localStorage.getItem('admintoken')
                },
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
                },
                cancelToken: signal.token
            }).then((response) => {
                setOrderDetails(response.data)
            }).catch(err => console.error(err))
        }
        catch (error) {
            if (axios.isCancel(error)) {
                console.error(error)
            }
        }

        return function cleanup() {
            signal.cancel("Pending Order Details Requests Canceled")
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const repost = () => {
        setSpinner(["fa", "fa-refresh", "fa-lg", "fa-fw", "fa-spin"])
        try {
            axios({
                method: "post",
                url: 'https://localhost:44376/api/orders/deliveredorders',
                data: {
                    'entoken': localStorage.getItem('admintoken')
                },
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
                },
                cancelToken: signal.token
            }).then((response) => {
                setOrderDetails(response.data)
                setSpinner(["fa", "fa-refresh", "fa-lg", "fa-fw"])
                dispatch(ORDERSTATUSCHANGED())
            }).catch(err => console.error(err))
        }
        catch (error) {
            if (axios.isCancel(error)) {
                console.error(error)
            }
        }
    }
    const showModal = (order) => {
        setCurrentOrder(order)
        orderstatus.current = order.orderStatus
        setModalShow(!modalShow)
    }
    const hideModal = () => {
        setModalShow(!modalShow)
    }
    const updateOrder = () => {
        const data = {
            id: currentOrder.id,
            orderStatus: orderstatus.current.value,
            remarks: remarks.current.value
        }
        console.log(data)
        const response = updateOrderStatus(data)
        response.then(res => {
            if (res.data === true) {
                hideModal()
                repost()
            }
        })
    }
    return (
        <Aux>
            <CardDetailsModal show={modalShow}
                hide={() => hideModal()} data={currentOrder}
                orderStatus={orderstatus} remarks={remarks}
                update={() => updateOrder()} />

            {/* Actual Body  */}
            <div className="mt-4 ml-4 p-4">
                <div className="m-auto text-center p-2">
                    <h5>Delivered Orders&emsp;
                            <span className="text-primary">
                            <i onClick={() => repost()} className={spinner.join(' ')}
                                aria-hidden="true"></i>
                        </span>
                    </h5>
                </div>
                <div className="table-responsive-md">
                    <table className="card-table table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Amount</th>
                                <th>Order Date</th>
                                <th>Payment Method</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!orderDetails ? <p>Loading...</p> : (
                                orderDetails.map(order => {
                                    return (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.phone}</td>
                                            <td>{order.address}</td>
                                            <td>{order.product}</td>
                                            <td>{order.quantity}</td>
                                            <td>{order.amount}</td>
                                            <td>{order.orderDate}</td>
                                            <td>{order.paymentMethod + order}</td>
                                            <td><i className="fa fa-home"></i> {order.orderStatus}</td>
                                            <td><i onClick={() => showModal(order)}
                                                className="fa fa-pencil-square-o fa-lg btn"></i></td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Aux>
    )
}

export default Deliveredorderdetail;
