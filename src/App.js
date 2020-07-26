import React from 'react';
import Admin from './component/admin/Component/Login/adminlogin'
import './App.css';
import 'hover.css'
import 'animate.css'
import './animation.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserComponent from './component/user/UserComponent';

function App() {
  let adminroute = <Route path="/admin" component={Admin}></Route>

  return (
    <Router>
      {window.location.pathname.indexOf('/admin') === 0 ? adminroute : <UserComponent/>}
    </Router>
  )
}

export default App;
