import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { getCategory, updateCategory, deleteCategory } from '../Requests/RequestPayloads'
import Aux from '../../../../hoc/auxillary'

export default class categorylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryData: [],
            modalShow: false,
            currentCategories: [],
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
        }
        this.categoryNameInput = React.createRef();
        this.categoryDescInput = React.createRef();
    }
    componentDidMount() {
        this.repost()
    }
    componentDidUpdate(prevProps) {
        if (this.props.change !== prevProps.change) {
            this.repost()
        }
    }
    handleChange(e) {
        const fieldname = e.target.name
        if (e.target.value === '') {
            this.setState({
                [fieldname]: {
                    ...this.state[fieldname],
                    error: 'This field cannot be empty',
                    style: ['alert', 'alert-danger'],
                    field: ['form-control', 'is-invalid']
                }
            })
        }
        else {
            this.setState({
                [fieldname]: {
                    ...this.state[fieldname],
                    error: null,
                    style: [],
                    field: ['form-control']
                }
            })
        }
    }

    repost() {
        const respone = getCategory()
        respone.then(res => {
            this.setState({ categoryData: res.data })
        })
    }

    showModal(category) {
        this.setState({ currentCategories: category })
        this.setState({ modalShow: true })
    }

    hideModal() {
        this.setState({ modalShow: false })
    }

    update() {
        if (this.categoryNameInput.current.value !== '' && this.categoryDescInput.current.value !== '') {
            const payload = {
                id: this.state.currentCategories.id,
                categoryName: this.categoryNameInput.current.value,
                categoryDescription: this.categoryDescInput.current.value
            }
            console.log(payload)
            const response = updateCategory(payload)
            response.then(res => {
                if (res.data === true) {
                    this.repost()
                    this.hideModal()
                }
            })
        }
        else{
            window.alert("Please fill empty fields")
        }
    }

    delete(id) {
        if (id !== null) {
            let result = window.confirm('Are you sure you want to delete this category?')
            if (result) {
                const response = deleteCategory(id)
                response.then(res => {
                    if (res.data === true) {
                        this.repost()
                    }
                })
            }

        }
    }

    render() {
        const renderData = this.state.categoryData.map((category) => {
            return (
                <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.categoryName}</td>
                    <td>{category.description}</td>
                    <td>{Date(category.creationDate)}</td>
                    <td>{Date(category.updationDate)}</td>
                    <td><i onClick={() => this.showModal(category)}
                        className="fa fa-pencil-square-o fa-lg btn"></i>&nbsp;&nbsp;
                    <i onClick={() => this.delete(category.id)} className="fa fa-trash-o fa-lg btn">
                        </i>
                    </td>
                </tr>
            )
        })
        return (
            <Aux>
                <Modal show={this.state.modalShow} onHide={() => this.hideModal()}>
                    <Modal.Header>
                        <h4>Update Category</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="CategoryName">Category Name</label>
                                <input type="text" className={this.state.namefield.field.join(' ')}
                                    defaultValue={this.state.currentCategories.categoryName}
                                    ref={this.categoryNameInput}
                                    onChange={(e) => this.handleChange(e)}
                                    name="namefield" />
                                <div className={this.state.namefield.style.join(' ')}>
                                    {this.state.namefield.error}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="CategoryDescription">Category Description</label>
                                <input type="text" className={this.state.descfield.field.join(' ')}
                                    defaultValue={this.state.currentCategories.description}
                                    ref={this.categoryDescInput}
                                    onChange={(e) => this.handleChange(e)}
                                    name="descfield" />
                                <div className={this.state.descfield.style.join(' ')}>
                                    {this.state.descfield.error}
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => this.hideModal()}
                            className="btn btn-outline-secondary pl-4 pr-4">
                            <b>Exit</b>
                        </button>
                        <button onClick={() => this.update()}
                            className="btn btn-outline-dark pl-5 pr-5 ml-3">
                            <b>Update</b>
                        </button>
                    </Modal.Footer>
                </Modal>

                {/* Actual Body  */}
                <div className="table-responsive-sm mt-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Creation Date</th>
                                <th>Updation Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderData}
                        </tbody>
                    </table>
                </div>
            </Aux>

        )
    }
}
