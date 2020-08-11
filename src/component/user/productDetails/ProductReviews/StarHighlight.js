import React from 'react'

const StarHighlight = (props) => {
    return (
        <div>
            <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span className="ml-1 text-dark">{props.star.five}</span>
            </div>
            <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span className="ml-1 text-dark">{props.star.four}</span>
            </div>
            <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span className="ml-1 text-dark">{props.star.three}</span>
            </div>
            <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <span className="ml-1 text-dark">{props.star.two}</span>
            </div>
            <div className="stars">
                <i className="fa fa-star"></i>
                <span className="ml-1 text-dark">{props.star.one}</span>
            </div>
        </div>
    )
}

export default StarHighlight;
