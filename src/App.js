import React from 'react';
import Navbar from './component/navbar'
import Sidebar from './component/sidebar'
import ProductSection from './component/productsection'
import Footercomponent from './component/footercomponent'
import Admin from './component/admin/Component/Login/adminlogin'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const normalroute =
  (<div className="App">
    {/* Navbar  */}
    <header>
      <Navbar></Navbar>
    </header>

    <Switch>
      <Route path="/" exact>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
              <ProductSection></ProductSection>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
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
