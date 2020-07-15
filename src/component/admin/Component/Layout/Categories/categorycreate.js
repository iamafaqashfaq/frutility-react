import React, { Component } from 'react'
import Aux from '../../../../hoc/auxillary'
import { createCategory } from './../Requests/RequestPayloads';
import CreateModal from './CreateModal';

export default class categorycreate extends Component {
    constructor(props) {
        super(props)
        this.categoryNameInput = React.createRef()
        this.categoryDescInput = React.createRef()
        this.state = {
            modalShow: false
        }
    }
    showModal() {
        this.setState({ modalShow: !this.state.modalShow })
    }
    hideModal() {
        this.setState({ modalShow: false })
        this.props.updateList()
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
                <CreateModal modalShow={this.state.modalShow} hideModal={()=>this.hideModal()}
                nameInput={this.categoryNameInput} descInput={this.categoryDescInput}
                create={() => this.createCategory()}/>
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
