import React, {useState, useContext} from 'react';
import './App.css';
import Nav from './../Nav';
import Home from '../HomePage/Home';
import CartContainer from '../CartPage/CartContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CartProvider } from './../../context/CartContext'

function App() {
  const { restaurant, cart } = useContext(CartContext);
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home restaurant={restaurant}/>}
            />
            <Route
              path="/cart"
              render={(props) => <CartContainer cart={cart.items}/>}
            />
          </Switch>

        </div>
      </Router>
    </CartProvider>
);
}

export default App;
