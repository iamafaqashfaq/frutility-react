import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../hoc/auxillary'
import { createCategory } from './../Requests/RequestPayloads';

export default class categorycreate extends Component {
    constructor(props) {
        super(props)
        this.categoryNameInput = React.createRef()
        this.categoryDescInput = React.createRef()
        this.state = {
            modalShow: false,
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
        }
    }
    showModal() {
        this.setState({ modalShow: !this.state.modalShow })
    }
    hideModal() {
        this.setState({ modalShow: false })
        this.props.updateList()
    }
    handleBlur(e) {
        if (e.target.value === '') {
            const fieldname = e.target.name
            this.setState({
                [fieldname]: {
                    ...this.state[fieldname],
                    error: 'This field cannot be empty',
                    style: ['alert', 'alert-danger'],
                    field: ['form-control', 'is-invalid']
                }
            })
        }
    }
    handleChange(e){
        if(e.target.value !== ''){
            const fieldname = e.target.name 
            this.setState({
                [fieldname]:{
                    ...this.state[fieldname],
                    error: null,
                    style: [],
                    field: ['form-control']
                }
            })
        }
    }

    createCategory() {
        if (this.categoryNameInput.current.value !== '' && this.categoryDescInput.current.value !== '') {
            const payload = {
                'name': this.categoryNameInput.current.value,
                'desc': this.categoryDescInput.current.value
            }
            const response = createCategory(payload)
            response.then(res => {
                this.props.updateList()
                this.hideModal()
            })
        }
        else{
            window.alert('Please fill all the fields')
        }
    }
    render() {
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
                                <input type="text" className={this.state.name.field.join(' ')}
                                    ref={this.categoryNameInput}
                                    onBlur={(e) => this.handleBlur(e)}
                                    onChange={(e) => this.handleChange(e)}
                                    name="name"/>
                                <div className={this.state.name.style.join(' ')}>
                                    {this.state.name.error}
                                </div>

                            </div>
                            <div className="form-group">
                                <label htmlFor="CategoryDescription">Category Description</label>
                                <input type="text" className={this.state.desc.field.join(' ')}
                                 ref={this.categoryDescInput}
                                 onBlur={(e)=>this.handleBlur(e)}
                                 onChange={(e)=>this.handleChange(e)}
                                 name="desc" />
                                 <div className={this.state.desc.style.join(' ')}>
                                    {this.state.desc.error}
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => this.hideModal()}
                            className="btn btn-outline-secondary pl-4 pr-4">
                            <b>Exit</b>
                        </button>
                        <button onClick={() => this.createCategory()}
                            className="btn btn-outline-dark pl-5 pr-5 ml-3">
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
}
