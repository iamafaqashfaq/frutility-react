import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../hoc/auxillary'
import Axios from 'axios'

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
        Axios.get(`https://localhost:44376/api/category`).then(res => {
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

    createSubCategory(){
        if(this.subCategoryNameInput.current.value !== '' && this.categoryNameSelect.current.value !== ''){
            let id = parseInt(this.categoryNameSelect.current.value)
            Axios({
                method: 'post',
                url: `https://localhost:44376/api/subcategory`,
                data: {
                    SubCategoryName: this.subCategoryNameInput.current.value,
                    CategoryID: id
                },
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
                }
            }).then(res => {
                if(res.data){
                    this.props.update()
                    this.hideModal()
                }
            }).catch(err => console.error(err))
        }
    }

    render() {
        return (
            <Aux>
                {/* MODAL FOR CREATION  */}
                <Modal show={this.state.modalShow} onHide={() => this.hideModal()}>
                    <Modal.Header><h4>Create Subcategory</h4></Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor="SubCategoryName">Subcategory Name</label>
                                <input type="text" className="form-control" ref={this.subCategoryNameInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Category">Category</label>
                                <select className="custom-select" name="categoryselect" ref={this.categoryNameSelect}>
                                    {this.state.categoriesData.map(category => {
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
                        <button className="btn btn-outline-secondary" onClick={() => this.hideModal()}><b>Exit</b></button>
                        <button className="btn btn-outline-success pl-5 pr-5" onClick={() => this.createSubCategory()}>
                            <b>Save</b>
                        </button>

                    </Modal.Footer>
                </Modal>


                {/* Actual Body  */}
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
