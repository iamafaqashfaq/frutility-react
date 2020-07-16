import React from 'react'

export const CustomerFilter = () => {
    return (
        <div className="row p-3">
            <div className="col-md-5 col-sm-4 col-lg-8">
                <input type="text" className="form-control form-control-lg"/>
            </div>
            <div className="col-md-3 col-sm-2 col-lg-4 mt-sm-1 mt-md-0 mt-lg-0">
                <button className="btn btn-lg btn-outline-info">Search</button>
            </div>
        </div>
    )
}
export default CustomerFilter
