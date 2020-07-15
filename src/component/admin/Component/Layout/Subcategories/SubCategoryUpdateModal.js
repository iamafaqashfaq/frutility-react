import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const SubCategoryUpdateModal = (props) => {
    const [state, setState] = useState({
        namefield: {
            error: null,
            errorstyle: [],
            fieldstyle: ['form-control']
        }
    })
    const handleChange = (e) => {
        if (e.target.value === '') {
            setState({
                [e.target.name]: {
                    error: 'This field cannot be empty',
                    errorstyle: ['alert', 'alert-danger'],
                    fieldstyle: ['form-control', 'is-invalid']
                }
            })
        }
        else {
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
            <Modal show={props.modalShow} onHide={() => props.hideModal()}>
                <Modal.Header>
                    <h4>Update Category</h4>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">

                            <label htmlFor="SubcategoryName">Subcategory Name</label>

                            <input type="text" className={state.namefield.fieldstyle.join(' ')}
                                defaultValue={props.data.subcategoryName}
                                ref={props.nameInput}
                                name="namefield" onChange={(e) => handleChange(e)} />
                            <div className={state.namefield.errorstyle.join(' ')}>
                                {state.namefield.error}
                            </div>
                        </div>
                        <div className="form-group">

                            <label htmlFor="Category">Category</label>

                            <select className="custom-select" name="categoryselect"
                                defaultValue={props.data.categoryID} ref={props.selectInput}>
                                {props.selectdata.map(category => {
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
                    <button onClick={() => props.hideModal()}
                        className="btn btn-outline-secondary pl-4 pr-4">
                        <b>Exit</b>
                    </button>
                    <button onClick={() => props.update()}
                        className="btn btn-outline-success pl-5 pr-5 ml-3">
                        <b>Update</b>
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SubCategoryUpdateModal;
