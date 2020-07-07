import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ADMINLOGOUT } from '../../../../../store/action/AdminActions'
import axios from 'axios'

export default function Adminnavbar() {
    const dispatch = useDispatch();
    const logout = () => {
        axios({
            method: 'post',
            url: `https://localhost:44376/api/usercontroller/signout`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
            }
        }).then(res => {
            const logout = res.data;
            if (logout) {
                localStorage.removeItem('admintoken')
                localStorage.removeItem('adminusername')
                dispatch(ADMINLOGOUT())
            }
        })
    }
    return (
        <div>
            <nav id="nav" className="navbar navbar-expand-md navbar-light bg-light">
                <Link to="/admin/dashboard" className="navbar-brand"><h3>Frutility Admin Panel</h3></Link>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <button className="nav-link btn btn-link"
                            onClick={logout}>
                            {localStorage.getItem('adminusername').toUpperCase()} - Log Out
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
