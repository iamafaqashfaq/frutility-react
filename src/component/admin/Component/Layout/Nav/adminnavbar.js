import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ADMINLOGOUT } from '../../../../../store/action/AdminActions'
import axios from 'axios'

export default function Adminnavbar() {
    const dispatch = useDispatch();
    const logout = () => {
        axios.post(`https://localhost:44376/api/usercontroller/signout`).then(res => {
            const logout = res.data;
            if (logout) {
                localStorage.removeItem('token')
                localStorage.removeItem('userName')
                dispatch(ADMINLOGOUT())
            }
        })
    }
    return (
        <div>
            <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/admin" className="navbar-brand"><h3>Frutility Admin Panel</h3></Link>
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <button className="nav-link btn btn-link"
                            onClick={logout}>
                            {localStorage.getItem('userName').toUpperCase()} - Log Out
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
