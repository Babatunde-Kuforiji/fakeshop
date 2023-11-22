import './App.css';
import React from 'react';
import Header from './containers/Headers';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ProductDetails from './containers/productDetails';
import ProductListing from './containers/ProductListing';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = '/' exact element = {<ProductListing/>} />
          <Route path = '/product/:productId' exact element = {<ProductDetails/>}/>
          <Route>404 Not Found!</Route>

      </Routes>
      </Router>
    </div>
  );
};

export default App;

