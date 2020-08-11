import React, { useState, useRef } from 'react'
import RatingStar from './RatingStar'
import { AddProductReview } from '../../Requests/UserRequestPayload'
import { useToasts } from 'react-toast-notifications';


const AddReview = (props) => {
    const { addToast } = useToasts()
    const [ratingCount, setRatingCount] = useState(0)
    const text = useRef()

    const handleSubmit = (e) => {
        const data = {
            productId: parseInt(props.id),
            quality: ratingCount,
            review: text.current.value
        }
        if (localStorage.getItem('userToken')) {
            const response = AddProductReview(data)
            response.then(res => {
                console.log(res.data)
                if (res.data) {
                    addToast("Thank you for your feedback", {
                        appearance: 'success',
                        autoDismiss: true
                    })
                    text.current.value = null
                    props.setStateChange()
                }
                else {
                    addToast("Cannot add your feedback", {
                        appearance: 'error',
                        autoDismiss: true
                    })
                }
            })
        }
    }

    return (
        <div className="form-group">
            <label htmlFor="YourReview">Add your review</label>
            <textarea name="reviewTextArea" cols="30" rows="3" className="form-control" ref={text}></textarea>
            <span className="mr-2">Rate it</span>
            <RatingStar setRating={setRatingCount} />
            <button className="btn btn-outline-dark btn-block font-weight-bolder" onClick={(e) => handleSubmit(e)}>
                Enter
            </button>
        </div>
    )
}

export default AddReview;
