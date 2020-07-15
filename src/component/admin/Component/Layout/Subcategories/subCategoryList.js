import React, { Component } from 'react'
import Aux from '../../../../hoc/auxillary'
import { getCategory, getSubcategory, updateSubcategory, deleteSubcategory } from '../Requests/RequestPayloads'
import Pagination from './../Pagination';
import SubCategoryUpdateModal from './SubCategoryUpdateModal';
class SubCategoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false,
            subCategory: [],
            currentsub: [],
            categories: [],
            currentPage: 1,
            postsPerPage: 10
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
        else {
            window.alert('Please fill all the fields')
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
    pagination = (pageNumber) => {
        this.setState({ currentPage: pageNumber })
    }
    prevPage = () => {
        this.setState({ currentPage: this.state.currentPage - 1 })
    }
    nextPage = () => {
        this.setState({ currentPage: this.state.currentPage + 1 })
    }

    render() {
        const indexOfLastPage = this.state.currentPage * this.state.postsPerPage
        const indexOfFirstPage = indexOfLastPage - this.state.postsPerPage
        const currentData = this.state.subCategory.slice(indexOfFirstPage, indexOfLastPage)

        const renderData = currentData.map((subcategory) => {
            return (
                <tr key={subcategory.id}>
                    <td>{subcategory.id}</td>
                    <td>{subcategory.subcategoryName}</td>
                    <td>{subcategory.categoryName}</td>
                    <td>{subcategory.creationDate}</td>
                    <td>{subcategory.updationDate}</td>
                    <td><i onClick={() => this.showModal(subcategory)}
                        className="fa fa-pencil-square-o fa-lg btn"></i>&nbsp;&nbsp;
                    <i onClick={() => this.delete(subcategory.id)} className="fa fa-trash-o fa-lg btn">
                        </i>
                    </td>
                </tr>
            )
        })
        return (
            <Aux>
                <SubCategoryUpdateModal modalShow={this.state.modalShow} hideModal={() => this.hideModal()}
                    update={() => this.update()} selectdata={this.state.categories} data={this.state.currentsub}
                    nameInput={this.subcategoryNameInput} selectInput={this.categoryidSelect} />

                <div className="table-responsive-sm mt-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
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
                {this.state.subCategory.length > this.state.postsPerPage ? (
                    <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.subCategory.length}
                        paginate={this.pagination} prevPage={this.prevPage} nextPage={this.nextPage} />
                ) : null}
            </Aux>
        )
    }
}

export default SubCategoryList

