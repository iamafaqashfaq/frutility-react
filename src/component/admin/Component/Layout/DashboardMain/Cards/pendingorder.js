import React from 'react'
export default function Pendingorder() {
    return (
        <div className="card bg-danger">
            <div className="card-body text-capitalize text-center align-items-center">
                <i className="card-title fa fa-shopping-cart fa-3x"></i>
                <h3 className="card-text">Pending Orders <span className="badge badge-warning">400</span></h3>
            </div>
        </div>
    )
}
