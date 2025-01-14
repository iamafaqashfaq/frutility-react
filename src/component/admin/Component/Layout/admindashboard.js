import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Adminnavbar from './Navbar/adminnavbar'
import './admindashboard.css'
import Sidebar from './Sidebar/sidebar'
import DashBoard from './DashboardMain/dashboardmain'
import Category from './Categories/categorylayout'
import SubCategory from './Subcategories/subCategoryLayout'
import Products from './Products/ProductLayout'
import Customers from './Customers/CustomersLayout'

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
                            <Route path="/admin/category"><Category/></Route>
                            <Route path="/admin/subcategory"><SubCategory/></Route>
                            <Route path="/admin/products"><Products/></Route>
                            <Route path="/admin/customers"><Customers/></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}
