import React, { Component } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../../hoc/auxillary'

export default class Todayorderdetail extends Component {
    constructor(props) {
        super(props)
        this.remarks = React.createRef()
        this.orderstatus = React.createRef()
        this.state = {
            orderDetails: [],
            modalShow: false,
            currentOrder: {}
        }
    }
    componentDidMount() {
        axios({
            method: "post",
            url: 'https://localhost:44376/api/orders/todayorders',
            data: {
                'entoken': localStorage.getItem('token')
            },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            this.setState({ orderDetails: response.data })
            console.log(this.state.orderDetails[0])
        }).catch(err => console.error(err))
    }
    showModal(order) {
        this.setState((prevstate, order) => { 
            modalShow: !this.state.modalShow, currentOrder: { order }
        })
        console.log(this.state.currentOrder)
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
                    <td><i onClick={() => this.showModal(order)} className="fa fa-pencil-square-o fa-lg btn"></i></td>
                </tr>
            )
        })

        return (
            <Aux>
                <Modal show={this.state.modalShow} onHide={() => this.showModal()}>
                    <Modal.Header>Order Action</Modal.Header>
                    <Modal.Body>
                        <table cellPadding="10">
                            <tbody>
                                <tr>
                                    <td>Order Id:</td>
                                    {/* <td>{this.state.currentOrder.order.id}</td> */}
                                </tr>
                                <tr>
                                    <td>At Date:</td>
                                    {/* <td>{this.state.currentOrder.order.orderDate}</td> */}
                                </tr>
                                <tr>
                                    <td>Status:</td>
                                    {/* <td>{this.state.currentOrder.order.orderStatus}</td> */}
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
                                            <option value="pending">Pending</option>
                                            <option value="dispatched">Dispatched</option>
                                            <option value="Delievered">Delievered</option>
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
                            <button onClick={() => this.showModal()} className="btn btn-secondary mr-2">Exit</button>
                            <button className="btn btn-primary" onClick={() => this.updateOrder()}>Save</button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <div className="mt-4 ml-4 p-4">
                    <div className="m-auto text-center p-2"><h5>Today Orders</h5></div>
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


