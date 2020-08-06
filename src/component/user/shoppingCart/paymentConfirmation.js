import React from 'react'
import { Modal } from 'react-bootstrap';
import { checkoutOrder, getUserOrderCount } from '../Requests/UserRequestPayload';
import { useDispatch } from 'react-redux';
import { USERORDERCOUNT } from '../../../store/action/UserAction';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const PaymentConfirmation = (props) => {
    const handleModalHide = () => {
        props.hide(false)
    }
    const { addToast } = useToasts()
    const history = useHistory()
    const dispatch = useDispatch()
    const handleCheckout = () => {
        const response = checkoutOrder()
        response.then(res => {
            if (res.data === true) {
                const response2 = getUserOrderCount()
                response2.then(_res => {
                    dispatch(USERORDERCOUNT(0))
                    addToast('Order Placed', {
                        appearance: 'success',
                        autoDismiss: true
                    })
                    history.push('/')
                })
            }
        })
    }
    return (
        <div>
            <Modal show={props.modal} onHide={() => handleModalHide()} size="xl">
                <Modal.Header>Check Details</Modal.Header>
                <Modal.Body>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Payment Method</th>
                                <th>Total Bill</th>
                                <th>Order Data</th>
                                <th>Shipping Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h6>{Object(props.product[0]).paymentMethod}</h6>
                                </td>
                                <td>
                                    <h6>{props.bill}</h6>
                                </td>
                                <td>
                                    <h6>{Object(props.product[0]).orderDate}</h6>
                                </td>
                                <td>
                                    {Object(Object(props.product[0]).applicationUser).shippingAddress},
                                    {Object(Object(props.product[0]).applicationUser).shippingCity},
                                    {Object(Object(props.product[0]).applicationUser).shippingState}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-info" onClick={() => handleCheckout()}>Checkout</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PaymentConfirmation;
