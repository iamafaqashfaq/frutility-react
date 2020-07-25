import React from 'react';
import Navbar from './component/user/navbar/navbar'
import ProductSection from './component/user/landingPage/productSection/productsection'
import Footercomponent from './component/footercomponent'
import Admin from './component/admin/Component/Login/adminlogin'
import './App.css';
import 'hover.css'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const normalroute =
  (<div>
    {/* Navbar  */}
    <header>
      <Navbar></Navbar>
    </header>
    <main>
      <Switch>
        <Route path="/" exact>
          <div className="container-fluid">
            <ProductSection/>
          </div>
        </Route>
      </Switch>
    </main>
    <footer>
      <Footercomponent></Footercomponent>
    </footer>
  </div>)

function App() {
  let adminroute = <Route path="/admin" component={Admin}></Route>

  return (
    <Router>
      {window.location.pathname.indexOf('/admin') === 0 ? adminroute : normalroute}
    </Router>
  )
}

export default App;
