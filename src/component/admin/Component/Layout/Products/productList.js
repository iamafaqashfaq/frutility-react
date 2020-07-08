import React, { Component } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import Aux from '../../../../hoc/auxillary'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false,
            products: [],
            currentproduct: [],
            categories: [],
            subcategories: []
        }
        this.subcategoryNameInput = React.createRef()
        this.categoryidSelect = React.createRef()
    }
    getOtherTables() {
        axios.get(`https://localhost:44376/api/category`).then(res => {
            this.setState({ categories: res.data })
        })
        axios.get(`https://localhost:44376/api/subcategory`).then(res => {
            this.setState({ subcategories: res.data })
        })
    }
    componentDidMount() {
        this.repost()
        this.getOtherTables()
    }

    componentDidUpdate() {
        if (this.props.change === true) {
            this.repost()
        }
    }
    repost() {
        axios({
            method: 'get',
            url: `https://localhost:44376/api/products`
        }).then(res => {
            console.log(res.data)
            this.setState({ products: res.data })
        }).catch(err => console.error(err))
    }
    showModal(subcategory) {
        // this.setState({ currentsub: subcategory })
        this.setState({ modalShow: true })
    }
    hideModal() {
        this.setState({ modalShow: false })
    }

    // updateCategory() {
    //     if (this.subcategoryNameInput.current.value !== '' && this.categoryidSelect.current.value !== '') {
    //         let categoryid = parseInt(this.categoryidSelect.current.value)
    //         axios({
    //             method: 'put',
    //             url: `https://localhost:44376/api/subcategory/${this.state.currentsub.subCategoryID}`,
    //             data: {
    //                 "subCategoryID": this.state.currentsub.subCategoryID,
    //                 "subCategoryName": this.subcategoryNameInput.current.value,
    //                 "categoryID": categoryid
    //             },
    //             headers: {
    //                 'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
    //             }
    //         }).then(res => {
    //             if (res.data === true) {
    //                 this.repost()
    //                 this.hideModal()
    //             }
    //         }).catch(err => console.error(err))
    //     }
    // }

    // deleteCategory(id) {
    //     if (id !== null) {
    //         let result = window.confirm('Are you sure you want to delete this subcategory?')
    //         if (result) {
    //             axios({
    //                 method: 'delete',
    //                 url: `https://localhost:44376/api/subcategory/${id}`,
    //                 headers: {
    //                     'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
    //                 }
    //             }).then(res => {
    //                 if (res.data === true) {
    //                     this.repost()
    //                 }
    //             }).catch(err => console.error(err))
    //         }

    //     }
    // }

    render() {
        const renderData = this.state.products.map((product) => {
            return (
                <tr key={product.productID}>
                    <td>{product.productID}</td>
                    <td>{product.productName}</td>
                    <td>{product.productVendor}</td>
                    <td>{product.price}</td>
                    <td>{product.shippingCharges}</td>
                    <td>{product.productAvailability}</td>
                    <td>Stock</td>
                    <th>Posting Date</th>
                    <th>Updation Date</th>
                    <th>Category</th>
                    <td><i onClick={() => this.showModal(product)}
                        className="fa fa-pencil-square-o fa-lg btn"></i>&nbsp;|&nbsp;
                    <i onClick={() => this.deleteCategory(product.id)} className="fa fa-trash-o fa-lg btn">
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
                                    ref={this.subcategoryNameInput} />
                            </div>
                            <div className="form-group">

                                <label htmlFor="Category">Category</label>

                                {/* <select className="custom-select" name="categoryselect"
                                defaultValue={this.state.currentsub.categoryID} ref={this.categoryidSelect}>
                                    {this.state.categories.map(category => {
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
                <div className="table-responsive-lg mt-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Vendor</th>
                                <th>Price</th>
                                <th>Shipping</th>
                                <th>Avalabilitiy</th>
                                <th>Stock</th>
                                <th>Posting Date</th>
                                <th>Updation Date</th>
                                <th>Category</th>
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

export default ProductList
