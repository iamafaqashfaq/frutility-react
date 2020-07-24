import React from 'react'

export default function sidebar() {
    return (
        <div id="sidebar">
            <div className="sidebar-cat-header">
                <h4 className="text-center">Categories</h4>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className="hvr-grow">Summer</li>
                    <li className="hvr-grow">Winter</li>
                    <li className="hvr-grow">Autumn</li>
                    <li className="hvr-grow">Spring</li>
                </ul>
            </nav>
        </div>
    )
}
