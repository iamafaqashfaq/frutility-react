import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './navbar/navbar'
import ProductSection from './landingPage/productSection/productsection'
import FooterComponent from '../footercomponent'
import Sidebar from './landingPage/sidebar/sidebar'

const UserComponent = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <div className="container-fluid">
                            <div className="row justify-content-center mt-3">
                                <div className="col-md-2 col-lg-2">
                                    <Sidebar/>
                                </div>
                                <div className="col-md-10 col-lg-10">
                                    <ProductSection/>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </main>
            <footer>
                <FooterComponent></FooterComponent>
            </footer>
        </div>
    )
}

export default UserComponent;
