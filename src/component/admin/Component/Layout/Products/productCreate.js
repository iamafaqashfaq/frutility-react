import React, { Component } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../hoc/auxillary'

class ProductCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
                modalShow: false
        }
    }

    showModal(){
        this.setState({modalShow: true})
    }

    hideModal(){
        this.setState({modalShow: false})
    }

    render() {
        return (
            <Aux>
                {/* MODAL FOR CREATION  */}
                <Modal show={this.state.modalShow} onHide={() => this.hideModal()}>
                    <Modal.Header><h4>Enter Products</h4></Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="CategoryName">Product Name</label>
                                <input type="text" className="form-control" ref={this.ProductNameInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="CategoryDescription">Category Description</label>
                                {/* <select className="custom-select" name="categoryselect" ref={this.categoryNameSelect}>
                                    {this.state.categoriesData.map(category => {
                                        return (
                                            <option key={category.id} value={category.id}>
                                                {category.categoryName}
                                            </option>
                                        )
                                    })}
                                </select> */}
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-outline-secondary" onClick={() => this.hideModal()}><b>Exit</b></button>
                        <button className="btn btn-outline-success pl-5 pr-5" onClick={() => this.createSubCategory()}>
                            <b>Save</b>
                        </button>

                    </Modal.Footer>
                </Modal>


                {/* Actual Body  */}
                <div className="card bg-dark text-white mt-4">
                    <div className="card-header"><h3>Products</h3></div>
                    <div className="card-body">
                        <h4 className="card-title text-capitalize text-center">
                            add, update or delete Products here
                    </h4>
                    </div>
                    <div className="card-footer text-right">
                        <button onClick={() => this.showModal()}
                            className="btn btn-secondary pl-5 pr-5"><b>Create</b></button>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default ProductCreate
