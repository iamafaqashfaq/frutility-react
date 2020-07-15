import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const SubCategoryCreateModal = (props) => {
    const [state, setState] = useState({
        namefield: {
            error: null,
            errorstyle: [],
            fieldstyle: ['form-control']
        }
    })
    const handleBlur = (e) => {
        if (e.target.value === '') {
            setState({
                [e.target.name]: {
                    error: 'This field cannot be empty',
                    errorstyle: ['alert', 'alert-danger'],
                    fieldstyle: ['form-control', 'is-invalid']
                }
            })
        }
    }
    const handleChange = (e) => {
        if (e.target.value !== '') {
            setState({
                [e.target.name]: {
                    error: null,
                    errorstyle: [],
                    fieldstyle: ['form-control']
                }
            })
        }
    }
    return (
        <div>
            <Modal show={props.showModal} onHide={() => props.hideModal()}>
                <Modal.Header><h4>Create Subcategory</h4></Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="SubCategoryName">Subcategory Name</label>
                            <input type="text" className={state.namefield.fieldstyle.join(' ')}
                                ref={props.nameInput}
                                name="namefield" onBlur={(e) => handleBlur(e)}
                                onChange={(e) => handleChange(e)} />
                            <div className={state.namefield.errorstyle.join(' ')}>
                                {state.namefield.error}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Category">Category</label>
                            <select className="custom-select" name="categoryselect" ref={props.selectInput}>
                                {props.selectData.map(category => {
                                    return (
                                        <option key={category.id} value={category.id}>
                                            {category.categoryName}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-secondary" onClick={() => props.hideModal()}><b>Exit</b></button>
                    <button className="btn btn-outline-success pl-5 pr-5" onClick={() => props.create()}>
                        <b>Save</b>
                    </button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SubCategoryCreateModal;
