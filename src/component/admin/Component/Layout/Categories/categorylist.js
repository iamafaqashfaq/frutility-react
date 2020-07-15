import React, { Component } from 'react'
import { getCategory, updateCategory, deleteCategory } from '../Requests/RequestPayloads'
import Aux from '../../../../hoc/auxillary'
import Pagination from './../Pagination';
import UpdateModal from './UpdateModal';

export default class categorylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryData: [],
            modalShow: false,
            currentCategories: [],
            currentPage: 1,
            postsPerPage: 10
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
        else {
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
    paginate = (pageNumber) => {
        this.setState({ currentPage: pageNumber })
    }
    pageNext() {
        this.setState({ currentPage: parseInt(this.state.currentPage + 1) })
    }
    pagePrev() {
        this.setState({ currentPage: parseInt(this.state.currentPage - 1) })
    }

    render() {
        const indexOfLastPage = this.state.currentPage * this.state.postsPerPage
        const indexOfFirstPage = indexOfLastPage - this.state.postsPerPage
        const currentData = this.state.categoryData.slice(indexOfFirstPage, indexOfLastPage)
        const renderData = currentData.map((category) => {
            return (
                <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.categoryName}</td>
                    <td>{category.description}</td>
                    <td>{category.creationDate}</td>
                    <td>{category.updationDate}</td>
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
                <UpdateModal nameInput={this.categoryNameInput} descInput={this.categoryDescInput}
                    showModal={this.state.modalShow} hideModal={() => this.hideModal()}
                    update={() => this.update()} data={this.state.currentCategories} />

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
                {this.state.categoryData.length > this.state.postsPerPage ? (
                    <Pagination postsPerPage={this.state.postsPerPage}
                        totalPosts={this.state.categoryData.length} paginate={this.paginate}
                        nextPage={() => this.pageNext()} prevPage={() => this.pagePrev()} />
                ) : null}
            </Aux>
        )
    }
}
