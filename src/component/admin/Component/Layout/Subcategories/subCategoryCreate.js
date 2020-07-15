import React, { Component } from 'react'
import Aux from '../../../../hoc/auxillary'
import { getCategory, createSubcategory } from '../Requests/RequestPayloads'
import SubCategoryCreateModal from './SubCategoryCreateModal'
class SubCategoryCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false,
            categoriesData: []
        }
        this.subCategoryNameInput = React.createRef()
        this.categoryNameSelect = React.createRef();
    }
    getCategories() {
        const response = getCategory()
        response.then(res => {
            this.setState({ categoriesData: res.data })
        })
    }
    showModal() {
        this.getCategories()
        this.setState({ modalShow: true })
    }

    hideModal() {
        this.setState({ modalShow: false })
        this.props.update()
    }

    create() {
        if (this.subCategoryNameInput.current.value !== '' && this.categoryNameSelect.current.value !== '') {
            let id = parseInt(this.categoryNameSelect.current.value)
            const payload = {
                name: this.subCategoryNameInput.current.value,
                'id': id
            }
            const response = createSubcategory(payload)
            response.then(res => {
                if (res.data) {
                    this.props.update()
                    this.hideModal()
                }
            })
        }
        else {
            window.alert('Please fill all the fields')
        }
    }

    render() {
        return (
            <Aux>
                <SubCategoryCreateModal showModal={this.state.modalShow} hideModal={() => this.hideModal()}
                    nameInput={this.subCategoryNameInput} selectInput={this.categoryNameSelect}
                    create={() => this.create()} selectData={this.state.categoriesData} />
                <div className="card bg-success text-white mt-4">
                    <div className="card-header"><h3>SubCategories</h3></div>
                    <div className="card-body">
                        <h4 className="card-title text-capitalize text-center">
                            add, update or delete Subcategories here
                    </h4>
                    </div>
                    <div className="card-footer text-right">
                        <button onClick={() => this.showModal()}
                            className="btn btn-light pl-5 pr-5"><b>Create</b></button>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default SubCategoryCreate
