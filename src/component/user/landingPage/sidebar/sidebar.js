import React from 'react'

export default function sidebar() {
    return (
        <div id="sidebar">
            <div className="sidebar-cat-header animate__animated animate__bounceInDown">
                <h4 className="text-center text-white p-3">Categories</h4>
            </div>
            <nav className="sidebar-nav animate__animated animate__backInLeft">
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