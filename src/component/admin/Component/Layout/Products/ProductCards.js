import React from 'react'

const ProductCards = (props) => {
    return (
        <div className="row mt-3">
                    {props.data.map(product => {
                        return (
                            <div className="col-4 my-2" key={product.id}>
                                <div className={"card text-secondary h-100 "+ (!product.availability ? "text-danger":null)}>
                                    <img src={product.imageURI}
                                        height="200px" width="200px"
                                        alt="Product" className="card-img-top" />
                                    <div className="card-body">
                                        <div className="card-title text-center">
                                            <h5>{product.name}</h5>
                                        </div>
                                        <div className="card-text">
                                            <p>
                                                <b>Vendor </b> {product.vendor}
                                            </p>
                                            <p>
                                                <b>Price </b> {product.price} PKR&nbsp;
                                                <b>Before &nbsp;
                                                    <del>{product.priceBeforeDiscount}</del>
                                                </b>
                                            </p>
                                            <p>
                                                <b>Stock </b> {product.stock} &emsp;
                                                <b>Shipping Charges </b> {product.shippingCharges}&nbsp;PKR
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer text-secondary">
                                        <small className="">
                                            {product.availability ? "Available" : "Out of Stock"}
                                        </small>
                                        <button onClick={() => props.modalShow(product)}
                                            className="btn btn-outline-dark float-right">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
    )
}

export default ProductCards;
