import React from 'react'
import './dashboardmain.css'
import TodayOrders from './Cards/todayorder'
import PendingOrders from './Cards/pendingorder'
import DeliveredOrders from './Cards/deliveredorder'
import Aux from '../../../../hoc/auxillary'
import TodayOrdersDetails from './CardsDetails/todayorderdetail'
import PendingOrdersDetails from './CardsDetails/pendingorderdetail'
import DeliveredOrdersDetails from './CardsDetails/deliveredorderdetail'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
                            <TodayOrders />
                        </div>
                    </Link>
                    <Link to="/admin/dashboard/pendingorders"
                        className="col-md-4 col-sm-6 text-decoration-none text-body">
                        <div>
                            <PendingOrders />
                        </div>
                    </Link>
                    <Link to="/admin/dashboard/deliveredorders"
                        className="col-md-4 col-sm-6 text-decoration-none text-body">
                        <div>
                            <DeliveredOrders />
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
