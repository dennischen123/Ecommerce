import React, {useState, useContext} from 'react';
import './App.css';
import Router from './Router';
import {CartProvider} from './context/CartContext'
function App() {
  return (
    <CartProvider>
		<Router></Router>
    </CartProvider>
);
}

export default App;
