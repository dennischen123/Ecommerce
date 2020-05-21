import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './../context/CartContext';

function Nav() {
    const { cart, restaurant } = useContext(CartContext);
    return (
        <nav className="sticky-top bg-white">
            <div>{restaurant.info.name}</div>
            <ul className="nav-links">
                <Link to="/">Menu</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart">Cart({cart.length})</Link>
            </ul>
        </nav>
    );
}

export default Nav;