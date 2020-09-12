import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { CartContext } from './../context/CartContext';
import {Button} from '@material-ui/core';

function Nav() {
    const {store, dispatch } = useContext(CartContext);
    return (
        <nav className="sticky-top bg-white">
            <div>{store.restaurant.info.name}</div>
            <ul>
                <Link to='/'>
                    <Button>Menu</Button>
                </Link>
                <Link to='/login'>
                    <Button>Login</Button>
                </Link>
                <Link to='/registration'>
                    <Button>Sign Up</Button>
                </Link>
                <Link to='/cart'>
                    <Button>Cart({store.cart.length})</Button>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;