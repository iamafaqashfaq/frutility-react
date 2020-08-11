import React, { useState, useEffect } from 'react'
import './ProductReviews.css'
import AddReview from './AddReview'
import { GetProductReviews } from '../../Requests/UserRequestPayload'
import { GetStarRating } from './../../Requests/UserRequestPayload';
import Pagination from './../../../admin/Component/Layout/Pagination';
import StarHighlight from './StarHighlight';

export const ProductReview = (props) => {
    const [reviews, setReviews] = useState([])
    const [star, setStar] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)
    const [currentData, setCurrentData] = useState([])
    const [stateChange, setStateChange] = useState(0)
    useEffect(() => {
        const response = GetProductReviews(props.match.params.id)
        response.then(res => {
            if (res.data) {
                setReviews(res.data)
                const indexOfLastPage = currentPage * postsPerPage
                const indexOfFirstPage = indexOfLastPage - postsPerPage
                setCurrentData(Array(...res.data).slice(indexOfFirstPage, indexOfLastPage))
            }
        })
        const responsetwo = GetStarRating(props.match.params.id)
        responsetwo.then(res => {
            if (res.data) {
                setStar(res.data)
            }
        })
    }, [stateChange, currentPage, postsPerPage, props.match.params.id])
    useEffect(() => {

    })
    const paginate = (pageNumber) => {
        console.log(pageNumber)
        setCurrentPage(pageNumber)
    }
    const pageNext = () => {
        setCurrentPage(currentPage => currentPage + 1)

    }
    const pagePrev = () => {
        setCurrentPage(currentPage => currentPage - 1)
    }
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-3 col-lg-3 rating-stars mt-5">
                    <StarHighlight star={star}/>
                </div>
                <div className="col-md-5 col-lg-5">
                    <AddReview id={props.match.params.id} 
                    setStateChange={() => setStateChange(stateChange => stateChange + 1)}/>
                    <hr />
                    <p>Other Reviews</p>
                    <hr />
                    {reviews.length === 0 ? <p>Not reviewed yet</p> : (
                        currentData.map(review => {
                            return (
                                <div key={review.id}>
                                    <h5>{review.name}</h5>
                                    <p className="p-3 border border-black rounded">{review.review}</p>
                                </div>
                            )
                        })
                    )}
                    {reviews.length > postsPerPage ? (
                        <Pagination postsPerPage={postsPerPage}
                            totalPosts={reviews.length} paginate={paginate.bind(this)}
                            nextPage={() => pageNext()} prevPage={() => pagePrev()} />
                    ) : null}
                </div>
            </div>
        </div>
    )
}
