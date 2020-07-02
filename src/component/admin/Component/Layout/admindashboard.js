import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Adminnavbar from './Nav/adminnavbar'

export default function admindashboard() {
    const dashboardhtml = (
        <h1>DashBoard Here</h1>
    )
    return (
        <div>
            <Adminnavbar/>
            <Router>
                <Switch>
                    <Route path="/admin" exact render={() => dashboardhtml}></Route>
                    <Route path="/admin/hello" render={() =>(<h1>Hello</h1>)}></Route>
                </Switch>
            </Router>
        </div>
    )
}
