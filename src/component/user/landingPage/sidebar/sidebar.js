import React, { useEffect, useState } from 'react'
import { getCategories, getSubcategories } from './../../Requests/UserRequestPayload';
import './sidebar.css'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const [categories, setCategories] = useState([])
    const [subcategories, setSubcategories] = useState([])
    const [selectSubcategory, setSelectSubcategory] = useState([])
    useEffect(() => {
        const categoryres = getCategories()
        categoryres.then(res => {
            if (res) {
                setCategories(res.data)
            }
        })
        const subcatres = getSubcategories()
        subcatres.then(res => {
            if (res) {
                setSubcategories(res.data)
                setSelectSubcategory(res.data)
            }
        })
    }, [])

    const showAllCategories = () => {
        setSelectSubcategory(subcategories)
    }
    const handleCategory = (id) => {
        const newList = subcategories.filter(item => {
            const lc = item.categoryID
            return String(lc).includes(id)
        })
        setSelectSubcategory(newList)
    }
    return (
        <div id="sidebar">
            <div className="sidebar-cat-header animate__animated 
                animate__bounceInDown stick">
                <h4 className="text-center text-white p-3">Categories</h4>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <NavLink to="/">
                    <li className="hvr-grow" onClick={() => showAllCategories()}>
                        All
                    </li>
                    </NavLink>
                    {categories.length === 0 ? <p>Loading...</p> : categories.map(category => {
                        return (
                                <li className="hvr-grow category-links" key={category.id}
                                    onClick={() => handleCategory(category.id)}>
                                    {category.categoryName}
                                </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="sidebar-cat-header animate__animated 
                animate__bounceInDown stick">
                <h4 className="text-center text-white p-3">Subcategories</h4>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {selectSubcategory.length === 0 ?
                        <p>Loading...</p> :
                        selectSubcategory.map(subcategory => {
                            return (
                                <NavLink to={'/subcategory/products/'+subcategory.id} key={subcategory.id}>
                                <li className="hvr-grow">
                                    {subcategory.subcategoryName}
                                </li>
                                </NavLink>
                            )
                        })}
                </ul>
            </nav>
        </div>
    )
}
