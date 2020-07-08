import React from 'react'
import './dashboardmain.css'
import Aux from '../../../../hoc/auxillary'
import TodayOrdersDetails from './CardsDetails/todayorderdetail'
import PendingOrdersDetails from './CardsDetails/pendingorderdetail'
import DeliveredOrdersDetails from './CardsDetails/deliveredorderdetail'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import OrderCardLayout from './Cards/orderCardLayout';

export default function Dashboardmain() {
    return (
        <Aux>
            <div className="app-page-title mt-1 ml-3 border-primary">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                            <i className="fa fa-line-chart fa-md"></i>
                        </div>
                        <div> Analytics Dashboard
                            <div className="page-title-subheading text-capitalize">
                                Here's current orders details are listed
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Router>
                <div className="row ml-3">
                    <Link to="/admin/dashboard/todayorders"
                        className="col-md-4 col-sm-6 text-decoration-none text-body">
                        <div>
                            <OrderCardLayout api="today" title="Today Orders" 
                            cardbg="bg-success" badgebg="badge-primary"/>
                        </div>
                    </Link>
                    <Link to="/admin/dashboard/pendingorders"
                        className="col-md-4 col-sm-6 text-decoration-none text-body">
                        <div>
                            <OrderCardLayout api="pending" title="Pending Orders" 
                            cardbg="bg-danger" badgebg="badge-warning"/>
                        </div>
                    </Link>
                    <Link to="/admin/dashboard/deliveredorders"
                        className="col-md-4 col-sm-6 text-decoration-none text-body">
                        <div>
                            <OrderCardLayout api="delivered" title="Delivered Orders" 
                            cardbg="bg-info" badgebg="badge-danger"/>
                        </div>
                    </Link>
                </div>
                <Switch>
                    <Route path="/admin/dashboard/todayorders"><TodayOrdersDetails /></Route>
                    <Route path="/admin/dashboard/pendingorders"><PendingOrdersDetails /></Route>
                    <Route path="/admin/dashboard/deliveredorders"><DeliveredOrdersDetails /></Route>
                </Switch>
            </Router>
        </Aux>
    )
}
