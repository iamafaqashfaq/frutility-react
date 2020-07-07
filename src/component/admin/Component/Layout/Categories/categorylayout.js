import React, { Component } from 'react'
import CategoryList from './categorylist'
import CategoryCreate from './categorycreate'

export default class categorylayout extends Component {
    constructor(props){
        super(props)
        this.state = {
            changes: false
        }
    }
    updateList(){
        this.setState({changes: !this.state.changes})
    }
    render() {
        return (
            <div className="container ml-3">
                <CategoryCreate updateList={() => this.updateList()}/>
                <CategoryList change={this.state.changes}/>
            </div>
        )
    }
}