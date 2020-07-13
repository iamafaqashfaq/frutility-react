import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../hoc/auxillary'
import { getCategory, getSubcategory, updateSubcategory, deleteSubcategory } from '../Requests/RequestPayloads'
class SubCategoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false,
            subCategory: [],
            currentsub: [],
            categories: []
        }
        this.subcategoryNameInput = React.createRef()
        this.categoryidSelect = React.createRef()
    }
    componentDidMount() {
        this.repost()
        const response = getCategory()
        response.then(res => {
            if (res.data !== undefined) {
                this.setState({ categories: res.data })
            }
        }).catch(err => console.error(err))
    }

    componentDidUpdate(prevProps) {
        if (this.props.change !== prevProps.change) {
            this.repost()
        }
    }
    repost() {
        const response = getSubcategory()
        response.then(res => {
            if (res.data !== undefined) {
                this.setState({ subCategory: res.data })
            }
        }).catch(err => console.error(err))
    }
    showModal(subcategory) {
        this.setState({ currentsub: subcategory })
        this.setState({ modalShow: true })
    }
    hideModal() {
        this.setState({ modalShow: false })
    }

    update() {
        if (this.subcategoryNameInput.current.value !== '' && this.categoryidSelect.current.value !== '') {
            let categoryid = parseInt(this.categoryidSelect.current.value)
            const payload = {
                id: this.state.currentsub.id,
                name: this.subcategoryNameInput.current.value,
                'categoryid': categoryid
            }
            const response = updateSubcategory(payload)
            response.then(res => {
                if (res.data === true) {
                    this.repost()
                    this.hideModal()
                }
            })
        }
    }

    delete(id) {
        if (id !== null) {
            let result = window.confirm('Are you sure you want to delete this subcategory?')
            if (result) {
                const response = deleteSubcategory(id)
                response.then(res => {
                    if (res.data === true) {
                        this.repost()
                    }
                })
            }

        }
    }

    render() {
        const renderData = this.state.subCategory.map((subcategory) => {
            return (
                <tr key={subcategory.id}>
                    <td>{subcategory.id}</td>
                    <td>{subcategory.subcategoryName}</td>
                    <td>{subcategory.categoryName}</td>
                    <td>{subcategory.creationDate}</td>
                    <td>{subcategory.updationDate}</td>
                    <td><i onClick={() => this.showModal(subcategory)}
                        className="fa fa-pencil-square-o fa-lg btn"></i>&nbsp;|&nbsp;
                    <i onClick={() => this.delete(subcategory.id)} className="fa fa-trash-o fa-lg btn">
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

                                <label htmlFor="SubcategoryName">Subcategory Name</label>

                                <input type="text" className="form-control"
                                    defaultValue={this.state.currentsub.subcategoryName}
                                    ref={this.subcategoryNameInput} />
                            </div>
                            <div className="form-group">

                                <label htmlFor="Category">Category</label>

                                <select className="custom-select" name="categoryselect"
                                    defaultValue={this.state.currentsub.categoryID} ref={this.categoryidSelect}>
                                    {this.state.categories.map(category => {
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
                        <button onClick={() => this.hideModal()}
                            className="btn btn-outline-secondary pl-4 pr-4">
                            <b>Exit</b>
                        </button>
                        <button onClick={() => this.update()}
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
                                <th>Subcategory ID</th>
                                <th>Subcategory Name</th>
                                <th>Category</th>
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

export default SubCategoryList

