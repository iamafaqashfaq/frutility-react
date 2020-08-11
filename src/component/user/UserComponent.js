import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './navbar/navbar'
import ProductSection from './landingPage/productSection/productsection'
import FooterComponent from '../footercomponent'
import Sidebar from './landingPage/sidebar/sidebar'
import SubcategoryProducts from './landingPage/productSection/subcategoryProduct/subcategoryProducts';
import productDetails from './productDetails/productDetails'
import Login from './Login/login';
import Signup from './Login/signup';
import ShoppingCart from './shoppingCart/ShoppingCart';
import Account from './Account/Account';
import Wishlist from './Wishlist/Wishlist';
import SearchProducts from './SearchProducts/SearchProducts';
import ShopNowPage from './Shopnow/ShopNowPage'

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
                                    <Sidebar bounce=" animate__animated 
                                    animate__bounceInDown"/>
                                </div>
                                <div className="col-md-10 col-lg-10">
                                    <ProductSection />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/product/:id/details" component={productDetails} />
                    <Route path="/subcategory/products/:id" component={SubcategoryProducts} />
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/cart" component={ShoppingCart}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/wishlist" component={Wishlist}/>
                    <Route path="/search/:name" component={SearchProducts}/>
                    <Route path="/shopnow" component={ShopNowPage}/>
                </Switch>
            </main>
            <footer>
                <FooterComponent></FooterComponent>
            </footer>
        </div>
    )
}

export default UserComponent;
