/**import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function retornarNumeroAleatorio(){
  return Math.trunc(Math.random*10);
}
function App() {
  return (
    <h1>Hola Mundo!</h1>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';


function App() {
  return (
    <Router>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;**/

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  
  return (
    <Router>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
   
  );
}

export default App;