import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import Aux from '../../../../hoc/auxillary'

export default class categorylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryData: [],
            modalShow: false,
            currentCategories: []
        }
        this.categoryNameInput = React.createRef();
        this.categoryDescInput = React.createRef();
    }
    componentDidMount() {
        this.repost()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.change !== this.props.change) {
            this.repost()
        }
    }

    repost() {
        axios({
            method: 'get',
            url: `https://localhost:44376/api/category`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
            }
        }).then(res => {
            this.setState({ categoryData: res.data })
        }).catch(err => console.error(err))
    }

    showModal(category) {
        this.setState({currentCategories: category})
        this.setState({modalShow: true})
    }

    hideModal() {
        this.setState({modalShow: false})
    }

    updateCategory() {
        if(this.categoryNameInput.current.value !== '' && this.categoryDescInput.current.value !== ''){
            console.log(this.state.currentCategories.id)
            axios({
                method: 'put',
                url: `https://localhost:44376/api/category/${this.state.currentCategories.id}`,
                data: {
                    id: this.state.currentCategories.id,
                    categoryName: this.categoryNameInput.current.value,
                    categoryDescription: this.categoryDescInput.current.value
                },
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
                }
            }).then(res => {
                if(res.data === true){
                    console.log(res.data)
                    this.repost()
                    this.hideModal()
                }
            }).catch(err => console.error(err))
        }
    }

    render() {
        const renderData = this.state.categoryData.map((category) => {
            return (
                <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.categoryName}</td>
                    <td>{category.categoryDescription}</td>
                    <td>{category.creationDate}</td>
                    <td>{category.updationDate}</td>
                    <td><i onClick={() => this.showModal(category)} 
                    className="fa fa-pencil-square-o fa-lg btn"></i>
                    </td>
                </tr>
            )
        })
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
                                <input type="text" className="form-control" 
                                defaultValue={this.state.currentCategories.categoryName}
                                ref={this.categoryNameInput}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="CategoryDescription">Category Description</label>
                                <input type="text" className="form-control"
                                defaultValue={this.state.currentCategories.categoryDescription}
                                ref={this.categoryDescInput} />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => this.hideModal()}
                            className="btn btn-outline-secondary pl-4 pr-4">
                            <b>Exit</b>
                        </button>
                        <button onClick={() => this.updateCategory()}
                            className="btn btn-outline-success pl-5 pr-5 ml-3">
                            <b>Update</b>
                        </button>
                    </Modal.Footer>
                </Modal>

                {/* Actual Body  */}
                <div className="table-responsive-sm mt-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Category ID</th>
                                <th>Category Name</th>
                                <th>Category Description</th>
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
