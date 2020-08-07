import React, { Component } from 'react'
import { getSubcategory, createProducts } from '../Requests/RequestPayloads'
import Aux from './../../../../hoc/auxillary';
import ProductCreateModal from './ProductCreateModal';

class ProductCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false,
            subcategoriesData: [],
            createdata: {}
        }
    }
    //Fetch Subcategories from webapi
    getCategories() {
        const response = getSubcategory()
        response.then(res => {
            if (res.data !== undefined) {
                this.setState({ subcategoriesData: res.data })
            }
        }).catch(err => console.error(err))
    }
    //To show Bootstrap MODAL
    showModal() {
        this.getCategories()
        this.setState({ modalShow: true })
    }
    //To Hide Bootstrap modal and fetching new data to the view
    hideModal() {
        this.setState({ modalShow: false })
        this.props.update()
    }
    //To create newly entered data in the server
    async create(data) {
        await this.setState({ createdata: data })
        let formdata = new FormData()
        formdata.append('Name', this.state.createdata.name)
        formdata.append('Description', this.state.createdata.description)
        formdata.append("Vendor", this.state.createdata.vendor)
        formdata.append("Price", parseFloat(this.state.createdata.price))
        formdata.append("PriceBeforeDiscount", parseFloat(this.state.createdata.beforeDiscount))
        formdata.append("Image1", this.state.createdata.image1)
        formdata.append('ShippingCharges', parseFloat(this.state.createdata.shipping))
        formdata.append('Availability', this.state.createdata.availability)
        formdata.append('Stock', parseInt(this.state.createdata.stock))
        formdata.append('PackageWeight', parseFloat(this.state.createdata.weight))
        formdata.append('SubCategoryID', parseInt(this.state.createdata.subcategoryId))
        const response = createProducts(formdata)
        response.then(res => {
            if (res.data) {
                this.props.update()
                this.hideModal()
            }
        })
    }

    render() {
        return (
            <Aux>
                {/* MODAL FOR CREATION  */}
                <ProductCreateModal modalShow={this.state.modalShow} hideModal={() => this.hideModal()}
                    create={this.create.bind(this)} subcategoriesData={this.state.subcategoriesData} />
                {/* Actual Body  */}
                <div className="card bg-dark text-white mt-4">
                    <div className="card-header"><h3>Products</h3></div>
                    <div className="card-body">
                        <h4 className="card-title text-capitalize text-center">
                            add, update or delete products here
                        </h4>
                    </div>
                    <div className="card-footer text-right">
                        <button onClick={() => this.showModal()}
                            className="btn btn-secondary pl-5 pr-5"><b>Create</b>
                        </button>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default ProductCreate
