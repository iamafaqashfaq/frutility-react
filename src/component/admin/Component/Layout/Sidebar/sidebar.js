/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/admin/dashboard" className="nav-link" activeClassName="active">
                                <i className="fa fa-home"></i>  Dashboard <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/category" className="nav-link">
                                <i className="fa fa-list"></i>  Categories
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/subcategory" className="nav-link">
                                <i className="fa fa-list-ol"></i>  Sub Category
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/products" className="nav-link">
                                <i className="fa fa-shopping-cart"></i>  Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/customers" className="nav-link">
                                <i className="fa fa-users"></i>  Customers
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to="/admin/reports" className="nav-link">
                                <i className="fa fa-area-chart"></i> Reports
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/integration" className="nav-link" href="#">
                                <i className="fa fa-microchip"></i>  Integrations
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </nav>
    )
}
