import React, { Component } from 'react'
import { getProducts, getSubcategory, updateProduct, deleteProduct } from '../Requests/RequestPayloads'
import Aux from '../../../../hoc/auxillary'
import axios from 'axios'
import Pagination from './../Pagination';
import ProductSearch from './ProductSearch';
import ProductUpdateModal from './ProductUpdateModal';
import ProductCards from './ProductCards';

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            modalShow: false,
            originalProduct: [],
            selectedProduct: [],
            subcategoriesData: [],
            createdata: {},
            currentPage: 1,
            postsPerPage: 6
        }
        this.searchInput = React.createRef()
        this.subcategorySelect = React.createRef()
    }
    signal = axios.CancelToken.source()
    //On First load Fetch products to show 
    componentDidMount() {
        this.fetchProducts(this.signal)
        this.fetchSubcategory()
    }
    // Destroy All Axios Requests
    componentWillUnmount() {
        this.signal.cancel('Cancelling All Product Requests')
    }
    componentDidUpdate(prevProps) {
        if (this.props.change !== prevProps.change) {
            this.fetchProducts(this.signal)
        }
    }
    // Fetch Subcategories for Update Menu
    fetchSubcategory() {
        const response = getSubcategory();
        response.then(res => {
            this.setState({ subcategoriesData: res.data })
        }).catch(err => console.error(err))
    }
    //Method to fetch Products from server
    async fetchProducts(signal) {
        if (this.searchInput.current.value === '') {
            const response = getProducts(signal)
            response.then(res => {
                this.setState({ originalProduct: res.data, products: res.data })
            }).catch(err => console.error(err))
        }
    }
    //Show Bootstrap Modal and setting states to poulate it
    async showModal(product) {
        await this.setState({
            selectedProduct: product,
            modalShow: true,
        })
    }
    //Search Button Click Event
    handleSearchInput(newList) {
        this.setState({ products: newList })
    }
    //Search Field Input Change Event
    changeSearchInput(e) {
        if (e.target.value === '') {
            this.fetchProducts(this.signal)
        }
    }
    //Hide Bootstrap Modal
    hideModal() {
        this.fetchProducts(this.signal)
        this.setState({ modalShow: false })
    }
    //Update the existing data
    async update(data) {
        console.log(data)
        await this.setState({createdata: data})
        let formdata = new FormData()
        formdata.append('Id', this.state.selectedProduct.id)
        formdata.append('Name', this.state.createdata.name)
        formdata.append('Description', this.state.createdata.description)
        formdata.append("Vendor", this.state.createdata.vendor)
        formdata.append("Price", parseFloat(this.state.createdata.price))
        formdata.append("PriceBeforeDiscount", parseFloat(this.state.createdata.beforeDiscount))
        formdata.append("Image1", this.state.createdata.image1)
        formdata.append("Image2", this.state.createdata.image2)
        formdata.append("Image3", this.state.createdata.image3)
        formdata.append("ImageNo1", this.state.createdata.imageNo1)
        formdata.append("ImageNo2", this.state.createdata.imageNo2)
        formdata.append("ImageNo3", this.state.createdata.imageNo3)
        formdata.append('ShippingCharges', parseFloat(this.state.createdata.shipping))
        formdata.append('Availability', this.state.createdata.availability)
        formdata.append('Stock', parseInt(this.state.createdata.stock))
        formdata.append('PackageWeight', parseFloat(this.state.createdata.weight))
        formdata.append('SubCategoryID', parseInt(this.state.createdata.subcategoryId))
        const response = updateProduct(formdata, this.state.selectedProduct.id)
        response.then(res => {
            if (res.data) {
                this.hideModal()
            }
        })
    }
    //Delete product
    delete() {
        const result = window.confirm('Are you sure to delete this product?')
        if (result) {
            const response = deleteProduct(this.state.selectedProduct.id)
            response.then(res => {
                this.hideModal()
            })
        }
        else {
            window.alert("Unable to delete Product!")
        }
    }
    pagination(pageNumber) {
        this.setState({ currentPage: pageNumber })
    }
    prevPage() {
        this.setState({ currentPage: this.state.currentPage - 1 })
    }
    nextPage() {
        this.setState({ currentPage: this.state.currentPage + 1 })
    }
    render() {
        const indexOfLastPage = this.state.currentPage * this.state.postsPerPage
        const indexOfFirstPage = indexOfLastPage - this.state.postsPerPage
        const currentData = this.state.products.slice(indexOfFirstPage, indexOfLastPage)

        return (
            <Aux>
                <ProductSearch searchInput={this.searchInput} 
                    originalProduct={this.state.originalProduct}
                    submitsearch={this.handleSearchInput.bind(this)} 
                    inputEmpty={this.changeSearchInput.bind(this)}/>
                {!this.state.selectedProduct.name ? null :
                    (
                        <ProductUpdateModal modalShow={this.state.modalShow} 
                            hideModal={() => this.hideModal()}
                            delete={() => this.delete()} 
                            selectedProduct={this.state.selectedProduct}
                            subcategorydata={this.state.subcategoriesData}
                            update={this.update.bind(this)} />
                    )

                }
                <ProductCards data={currentData} modalShow={this.showModal.bind(this)}/>

                {this.state.products.length > this.state.postsPerPage ? (
                    <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.products.length}
                        paginate={this.pagination} prevPage={() => this.prevPage()} nextPage={() => this.nextPage()} />
                ) : null}
            </Aux>
        )
    }
}

export default ProductList
