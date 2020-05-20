import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div>Name</div>
            <ul className="nav-links">
                <Link to="/">Menu</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </ul>
        </nav>
    );
}

export default Nav;