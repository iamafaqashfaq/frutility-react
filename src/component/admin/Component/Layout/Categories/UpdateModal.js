import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const UpdateModal = (props) => {
    const [state, setState] = useState({
        namefield: {
            error: null,
            style: [],
            field: ['form-control']
        },
        descfield: {
            error: null,
            style: [],
            field: ['form-control']
        }
    })

    const handleChange = (e) => {
        const fieldname = e.target.name
        if (e.target.value === '') {
            setState({
                ...state,
                [fieldname]: {
                    error: 'This field cannot be empty',
                    style: ['alert', 'alert-danger'],
                    field: ['form-control', 'is-invalid']
                }
            })
        }
        else {
            setState({
                ...state,
                [fieldname]: {
                    error: null,
                    style: [],
                    field: ['form-control']
                }
            })
        }
    }

    return (
        <div>
            <Modal show={props.showModal} onHide={() => props.hideModal()}>
                <Modal.Header>
                    <h4>Update Category</h4>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="CategoryName">Category Name</label>
                            <input type="text" className={state.namefield.field.join(' ')}
                                defaultValue={props.data.categoryName}
                                ref={props.nameInput}
                                onChange={(e) => handleChange(e)}
                                name="namefield" />
                            <div className={state.namefield.style.join(' ')}>
                                {state.namefield.error}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="CategoryDescription">Category Description</label>
                            <input type="text" className={state.descfield.field.join(' ')}
                                defaultValue={props.data.description}
                                ref={props.descInput}
                                onChange={(e) => handleChange(e)}
                                name="descfield" />
                            <div className={state.descfield.style.join(' ')}>
                                {state.descfield.error}
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => props.hideModal()}
                        className="btn btn-outline-secondary pl-4 pr-4">
                        <b>Exit</b>
                    </button>
                    <button onClick={() => props.update()}
                        className="btn btn-outline-dark pl-5 pr-5 ml-3">
                        <b>Update</b>
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UpdateModal;
