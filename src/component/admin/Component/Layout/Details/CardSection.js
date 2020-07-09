import React from 'react'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../hoc/auxillary'

export function CategoryCard() {
    
    return (
        <Aux>
            <Modal show={this.state.modalShow} onHide={() => this.hideModal()}>
                <Modal.Header>
                    <h4>Create Category</h4>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="CategoryName">Category Name</label>
                            <input type="text" className="form-control" ref={this.categoryNameInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CategoryDescription">Category Description</label>
                            <input type="text" className="form-control" ref={this.categoryDescInput} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => this.hideModal()}
                        className="btn btn-outline-secondary pl-4 pr-4">
                        <b>Exit</b>
                    </button>
                    <button onClick={() => this.createCategory()}
                        className="btn btn-outline-success pl-5 pr-5 ml-3">
                        <b>Save</b>
                    </button>
                </Modal.Footer>
            </Modal>
            <div className="card bg-info text-white mt-4">
                <div className="card-header"><h3>Categories</h3></div>
                <div className="card-body">
                    <h4 className="card-title text-capitalize text-center">
                        add, update or delete categories here
                    </h4>
                </div>
                <div className="card-footer text-right">
                    <button onClick={() => this.showModal()}
                        className="btn btn-dark pl-5 pr-5">Create</button>
                </div>
            </div>
        </Aux>
    )
}