import React from 'react';
import './App.css';
import Nav from './../Nav';
import Home from './../Home';
import CartContainer from '../CartContainer';
import Banner from './../Banner';
import InfoTab from './../InfoTab';
import MenuContainer from './../MenuContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const restaurant = {
    info: {
      name: "Fruit Shop",
      address: "3638 noriega st",
      phoneNumber: "415-676-9556",
      bannerImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    submenus: [
      {
        name: "Top Menu Items",
        items:[
          {
          name: 'Brown Sugar Milk Tea',
          price: '4.99',
          img: 'https://images.unsplash.com/photo-1546471364-f820fd19c9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80'
        },
        {
          name: 'Thai Milk Tea',
          price: '5.49',
          img: 'https://images.unsplash.com/photo-1549248581-cf105cd081f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        }]
      },
      {
        name: "Milk Tea",
        items:[
          {
          name: 'Brown Sugar Milk Tea',
          price: '4.99',
          img: 'https://images.unsplash.com/photo-1555704574-f9ecf4717298?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Thai Milk Tea',
          price: '5.49',
          img: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
          name: 'Jasmine Green Milk Tea',
          price: '5.49',
          img: 'https://images.unsplash.com/photo-1506807803488-8eafc15316c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        },
        {
          name: 'Hong Kong Style Milk Tea',
          price: '5.49',
          img: 'https://images.unsplash.com/photo-1524593410820-38510f580a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        }]
      }
    ]
  };
  return (
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
        render={(props) => <CartContainer />}
      />
    </Switch>

  </div>
</Router>
);
}

export default App;
