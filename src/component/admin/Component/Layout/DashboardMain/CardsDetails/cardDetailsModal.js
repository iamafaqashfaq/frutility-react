import React from 'react'
import { Modal } from 'react-bootstrap';

const CardDetailsModal = (props) => {
    return (
        <Modal show={props.show} onHide={() => props.hide()}>
            <Modal.Header>Order Action</Modal.Header>
            <Modal.Body>
                <table cellPadding="10">
                    <tbody>
                        <tr>
                            <td>Order Id:</td>
                            <td>{props.data.id}</td>
                        </tr>
                        <tr>
                            <td>At Date:</td>
                            <td>{props.data.orderDate}</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{props.data.orderStatus}</td>
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
                                    id="orderstatus" ref={props.orderStatus} defaultValue={props.orderStatus.current}>
                                    <option value="PENDING">Pending</option>
                                    <option value="DISPATCHED">Dispatched</option>
                                    <option value="DELIVERED">Delivered</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Remarks:</td>
                            <td>
                                <textarea name="remarks" rows="10" cols="30" ref={props.remarks}
                                    className="form-control" defaultValue={props.data.remarks}>
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <div className="row">
                    <button onClick={() => props.hide()} className="btn btn-secondary mr-2">Exit</button>
                    <button className="btn btn-primary" onClick={() => props.update()}>Save</button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default CardDetailsModal;
