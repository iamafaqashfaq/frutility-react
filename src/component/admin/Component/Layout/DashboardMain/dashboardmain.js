import React from 'react'

export default function Dashboardmain() {
    const style = {
        border: '1px solid red'
    }
    return (
        <div className="row">
            <div className="col-6" style={style}>
                HEllo
            </div>
            <div className="col-6" style={style}>
                Yes
            </div>
        </div>
    )
}
