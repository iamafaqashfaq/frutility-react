import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const CreateModal = (props) => {
    const [state, setState] = useState({
        name: {
            error: null,
            style: [],
            field: ['form-control']
        },
        desc: {
            error: null,
            style: [],
            field: ['form-control']
        }
    })
    const handleBlur = (e) => {
        if (e.target.value === '') {
            const fieldname = e.target.name
            setState({
                ...state,
                [fieldname]: {
                    error: 'This field cannot be empty',
                    style: ['alert', 'alert-danger'],
                    field: ['form-control', 'is-invalid']
                }
            })
        }
    }
    const handleChange = (e) => {
        if (e.target.value !== '') {
            const fieldname = e.target.name
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
            <Modal show={props.modalShow} onHide={() => props.hideModal()}>
                <Modal.Header>
                    <h4>Create Category</h4>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="CategoryName">Category Name</label>
                            <input type="text" className={state.name.field.join(' ')}
                                ref={props.nameInput}
                                onBlur={(e) => handleBlur(e)}
                                onChange={(e) => handleChange(e)}
                                name="name" />
                            <div className={state.name.style.join(' ')}>
                                {state.name.error}
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="CategoryDescription">Category Description</label>
                            <input type="text" className={state.desc.field.join(' ')}
                                ref={props.descInput}
                                onBlur={(e) => handleBlur(e)}
                                onChange={(e) => handleChange(e)}
                                name="desc" />
                            <div className={state.desc.style.join(' ')}>
                                {state.desc.error}
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => props.hideModal()}
                        className="btn btn-outline-secondary pl-4 pr-4">
                        <b>Exit</b>
                    </button>
                    <button onClick={() => props.create()}
                        className="btn btn-outline-dark pl-5 pr-5 ml-3">
                        <b>Save</b>
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateModal;