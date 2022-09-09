import React, { useState } from 'react';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (password, email) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </BrowserRouter>
  );
}

export default App;
