import React, { Component } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../../hoc/auxillary'

export default class Deliveredorderdetail extends Component {
    constructor(props) {
        super(props)
        this.remarks = React.createRef()
        this.orderstatus = React.createRef()
        this.state = {
            orderDetails: [],
            modalShow: false,
            currentOrder: [],
            spinner: ["fa", "fa-refresh", "fa-lg", "fa-fw"]
        }
    }
    signal = axios.CancelToken.source()
    componentDidMount() {
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
                cancelToken: this.signal.token
            }).then((response) => {
                this.setState({ orderDetails: response.data })
            }).catch(err => console.error(err))
        }
        catch (error) {
            if (axios.isCancel(error)) {
                console.error(error)
            }
        }
    }
    componentWillUnmount() {
        this.signal.cancel("Delievered Order Details Request Canceled")
    }

    repost() {
        let addSpin = this.state.spinner
        addSpin.push('fa-spin')
        this.setState({ spinner: addSpin })
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
                cancelToken: this.source.token
            }).then((response) => {
                this.setState({ orderDetails: response.data })
                addSpin.pop('fa-spin')
                this.setState({ spinner: addSpin })
            }).catch(err => console.error(err))
        }
        catch (error) {
            if (axios.isCancel(error)) {
                console.error(error)
            }
        }
    }
    showModal(order) {
        this.setState({ currentOrder: order })
        this.setState({ modalShow: !this.setState.modalShow })
        this.orderstatus.current.value = order.OrderStatus
    }

    hideModal() {
        this.setState({ modalShow: !this.state.modalShow })
    }

    updateOrder() {
        console.log(this.remarks.current.value)
        console.log(this.orderstatus.current.value)
    }
    render() {
        const detailsData = this.state.orderDetails.map((order) => {
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
                    <td>{order.paymentMethod}</td>
                    <td className="fa fa-home"> {order.orderStatus}</td>
                    <td><i onClick={() => this.showModal(order)} className="fa fa-pencil-square-o fa-lg btn"></i></td>
                </tr>
            )
        })

        return (
            <Aux>
                <Modal show={this.state.modalShow} onHide={() => this.repost()}>
                    <Modal.Header>Order Action</Modal.Header>
                    <Modal.Body>
                        <table cellPadding="10">
                            <tbody>
                                <tr>
                                    <td>Order Id:</td>
                                    <td>{this.state.currentOrder.id}</td>
                                </tr>
                                <tr>
                                    <td>At Date:</td>
                                    <td>{this.state.currentOrder.orderDate}</td>
                                </tr>
                                <tr>
                                    <td>Status:</td>
                                    <td>{this.state.currentOrder.orderStatus}</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <table cellPadding="10">
                            <tbody>
                                <tr>
                                    <td>Status:</td>
                                    <td>
                                        <select className="custom-select" name="statusselect"
                                            id="orderstatus" ref={this.orderstatus}>
                                            <option value="Pending">Pending</option>
                                            <option value="Dispatched">Dispatched</option>
                                            <option value="Delievered">Delivered</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Remarks:</td>
                                    <td>
                                        <textarea name="remarks" rows="10" cols="30" ref={this.remarks} className="form-control">
                                        </textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="row">
                            <button onClick={() => this.hideModal()} className="btn btn-secondary mr-2">Exit</button>
                            <button className="btn btn-primary" onClick={() => this.updateOrder()}>Save</button>
                        </div>
                    </Modal.Footer>
                </Modal>

                {/* Actual Body  */}
                <div className="mt-4 ml-4 p-4">
                    <div className="m-auto text-center p-2">
                        <h5>Delivered Orders&emsp;
                            <span className="text-primary">
                                <i onClick={() => this.repost()} className={this.state.spinner.join(' ')}
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
                                {detailsData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Aux>
        )
    }
}


