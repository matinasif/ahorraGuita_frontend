import logo from './logo.svg';
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
