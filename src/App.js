import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CheckoutPage from './components/Checkout';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <div className='app'>
      
        <Routes>
          <Route path='/' element={<div><Header/><HomePage/></div>} />
          <Route path="/checkout" element={  <div><Header/><Checkout/></div>} />
          <Route path="/login" element={ <h1>Login</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
