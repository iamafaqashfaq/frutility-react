import React, { Component } from 'react'
import SubCategoryCreate from './subCategoryCreate'
import SubCategoryList from './subCategoryList'

class SubCategoryLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            change: false
        }
    }

    updateList(){
        this.setState({change: !this.state.change})
    }

    render() {
        return (
            <div className="container ml-3">
                <SubCategoryCreate update={() => this.updateList()}/>
                <SubCategoryList change={this.state.change}/>
            </div>
        )
    }
}

export default SubCategoryLayout
