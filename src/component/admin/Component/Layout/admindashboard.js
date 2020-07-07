import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Adminnavbar from './Navbar/adminnavbar'
import './admindashboard.css'
import Sidebar from './Sidebar/sidebar'
import AppFooter from '../../../footercomponent';
import DashBoard from './DashboardMain/dashboardmain'

export default function admindashboard() {
    return (
        <Router>
            <Adminnavbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div id="content" className="col-md-9">
                        <Switch>
                            <Route path="/admin" exact>
                                <Redirect to="/admin/dashboard" exact />
                            </Route>
                            <Route path="/admin/dashboard"><DashBoard/></Route>
                            <Route path="/admin/category" render={() => (<h1>Hello</h1>)}></Route>
                        </Switch>
                        <footer>
                            <AppFooter />
                        </footer>
                    </div>
                </div>
            </div>
        </Router>
    )
}
