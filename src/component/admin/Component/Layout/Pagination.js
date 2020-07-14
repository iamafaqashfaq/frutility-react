import React, { Component } from 'react'

class Pagination extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { postsPerPage, totalPosts } = this.props
        const pageNumber = []
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumber.push(i);
        }
        
        return (
            <div>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button className="page-link btn-link"
                        onClick={() => this.props.prevPage()}>Previous</button>
                    </li>
                    {pageNumber.map(number => {
                        return (
                            <li className="page-item" key={number}>
                                <button onClick={() => this.props.paginate(number)} 
                                className="btn-link page-link">{number}</button>
                            </li>
                        )
                    })}
                    <li className="page-item">
                        <button className="page-link btn-link" 
                        onClick={() => this.props.nextPage()}>Next</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Pagination
