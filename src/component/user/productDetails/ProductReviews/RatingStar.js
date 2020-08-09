import React, { useRef } from 'react'

const RatingStar = (props) => {
    const starOne = useRef()
    const starTwo = useRef()
    const starThree = useRef()
    const starFour = useRef()
    const starFive = useRef()
    const parentDiv = useRef()

    const handleHoverOne = (e) => {
        if (e.target.classList.contains("star-checked")) {
            e.target.classList.remove("star-checked")
            starTwo.current.classList.remove("star-checked")
            starThree.current.classList.remove("star-checked")
            starFour.current.classList.remove("star-checked")
            starFive.current.classList.remove("star-checked")
        }
        else {
            e.target.classList.add("star-checked")
            starTwo.current.classList.remove("star-checked")
            starThree.current.classList.remove("star-checked")
            starFour.current.classList.remove("star-checked")
            starFive.current.classList.remove("star-checked")
        }
    }
    const handleHoverTwo = (e) => {
        if (e.target.classList.contains("star-checked")) {
            e.target.classList.remove("star-checked")
            starThree.current.classList.remove("star-checked")
            starFour.current.classList.remove("star-checked")
            starFive.current.classList.remove("star-checked")
        }
        else {
            starOne.current.classList.add("star-checked")
            e.target.classList.add("star-checked")
            starThree.current.classList.remove("star-checked")
            starFour.current.classList.remove("star-checked")
            starFive.current.classList.remove("star-checked")
        }
    }
    const handleHoverThree = (e) => {
        if (e.target.classList.contains("star-checked")) {
            e.target.classList.remove("star-checked")
            starFour.current.classList.remove("star-checked")
            starFive.current.classList.remove("star-checked")
        }
        else {
            starOne.current.classList.add("star-checked")
            starTwo.current.classList.add("star-checked")
            e.target.classList.add("star-checked")
            starFour.current.classList.remove("star-checked")
            starFive.current.classList.remove("star-checked")
        }
    }
    const handleHoverFour = (e) => {
        if (e.target.classList.contains("star-checked")) {
            e.target.classList.remove("star-checked")
            starFive.current.classList.remove("star-checked")
        }
        else {
            starOne.current.classList.add("star-checked")
            starTwo.current.classList.add("star-checked")
            starThree.current.classList.add("star-checked")
            e.target.classList.add("star-checked")
            starFive.current.classList.remove("star-checked")
        }
    }
    const handleHoverFive = (e) => {
        if (e.target.classList.contains("star-checked")) {
            e.target.classList.remove("star-checked")
        }
        else {
            starOne.current.classList.add("star-checked")
            starTwo.current.classList.add("star-checked")
            starThree.current.classList.add("star-checked")
            starFour.current.classList.add("star-checked")
            e.target.classList.add("star-checked")
        }
    }
    const submitRating = () => {
        if(parentDiv.current.childNodes[0].classList.contains("star-checked")){
            props.setRating(1)
        }
        if(parentDiv.current.childNodes[1].classList.contains("star-checked")){
            props.setRating(2)
        }
        if(parentDiv.current.childNodes[2].classList.contains("star-checked")){
            props.setRating(3)
        }
        if(parentDiv.current.childNodes[3].classList.contains("star-checked")){
            props.setRating(4)
        }
        if(parentDiv.current.childNodes[4].classList.contains("star-checked")){
            props.setRating(5)
        }
    }
    return (
        <div className="rate-star d-inline-block" onClick={() => submitRating()} ref={parentDiv}>
            <i className="fa fa-star first" ref={starOne} onMouseEnter={(e => handleHoverOne(e))}></i>
            <i className="fa fa-star second" ref={starTwo} onMouseEnter={(e => handleHoverTwo(e))}></i>
            <i className="fa fa-star third" ref={starThree} onMouseEnter={(e => handleHoverThree(e))}></i>
            <i className="fa fa-star fourth" ref={starFour} onMouseEnter={(e => handleHoverFour(e))}></i>
            <i className="fa fa-star fifth" ref={starFive} onMouseEnter={(e => handleHoverFive(e))}></i>
        </div>
    )
}

export default RatingStar;
