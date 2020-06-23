import React from 'react';
import Navbar from './component/navbar'
import Sidebar from './component/sidebar'
import ProductSection from './component/productsection'
import Footercomponent from './component/footercomponent'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      {/* Navbar  */}
      <header>
        <Navbar></Navbar>
      </header>

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
      <footer>
        <Footercomponent></Footercomponent>
      </footer>
    </div>
  );
}

export default App;
