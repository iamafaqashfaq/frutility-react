import React,{useState} from 'react'
import { NavLink } from "react-router-dom"
import Navheader from '../../Navheader/navheader';
import brandlogo from '../../../assets/frutilitylogoWhite.png'
import './navbar.css'

export default function Navbar() {
    const [togglerClass,setTogglerClass] = useState(['collapse','navbar-collapse'])
    const handleToggler = () => {
        if(togglerClass.includes('collapse')){
            setTogglerClass(['navbar-collapse'])
        }
        else{
            setTogglerClass(['collapse','navbar-toggler'])
        }
    }
    return (
        <div>
            <Navheader />
            <nav className="site-navbar navbar-expand-md">
                <div className="container d-flex flex-column flex-wrap flex-md-row align-content-center">
                    <NavLink to="/">
                        <img src={brandlogo} alt="Frutility" width="100px" />
                    </NavLink>
                    <button className="navbar-toggler" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={handleToggler}>
                        <i className="fa fa-caret-down fa-lg"></i>
                    </button>
                    <div className={togglerClass.join(' ')} id="navbarSupportedContent">
                        <NavLink to="/freshitems" className="nav-link">Fresh Stock</NavLink>
                        <form className="form-inline col-auto">
                            <input type="text" className="nav-search" placeholder="Search" />
                            <button className="btn search-btn">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                        <i className="fa fa-heart fa-2x nav-wishlist nav-link"></i>
                        <i className="fa fa-shopping-cart nav-cart fa-2x nav-link"></i>                        
                        <NavLink to="/login" className="nav-link">
                            <i className="fa fa-user fa-2x"></i>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}