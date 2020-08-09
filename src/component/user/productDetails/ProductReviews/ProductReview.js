import React, { useState, useEffect } from 'react'
import './ProductReviews.css'
import AddReview from './AddReview'
import { GetProductReviews } from '../../Requests/UserRequestPayload'
import { GetStarRating } from './../../Requests/UserRequestPayload';

export const ProductReview = (props) => {
    const [reviews, setReviews] = useState([])
    const [star, setStar] = useState({})
    useEffect(() => {
        const response = GetProductReviews(props.match.params.id)
        response.then(res => {
            if (res.data) {
                setReviews(res.data)
            }
        })
        const responsetwo = GetStarRating(props.match.params.id)
        responsetwo.then(res => {
            if (res.data) {
                setStar(res.data)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-3 col-lg-3 rating-stars mt-5">
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="ml-1 text-dark">{star.five}</span>
                    </div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="ml-1 text-dark">{star.four}</span>
                    </div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="ml-1 text-dark">{star.three}</span>
                    </div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="ml-1 text-dark">{star.two}</span>
                    </div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <span className="ml-1 text-dark">{star.one}</span>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5">
                    <AddReview id={props.match.params.id} />
                    <hr />
                    <p>Other Reviews</p>
                    <hr />
                    {reviews.length === 0 ? <p>Not reviewed yet</p> : (
                        reviews.map(review => {
                            return (
                                <div key={review.id}>
                                    <h5>{review.name}</h5>
                                    <p className="p-3 border border-black rounded">{review.review}</p>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}
