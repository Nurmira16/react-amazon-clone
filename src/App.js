import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <div className='app'>
      
        <Routes>
          <Route path='/' element={<div><Header/><h1>Home Page</h1></div>} />
          <Route path="/login" element={  <h1>Login</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
