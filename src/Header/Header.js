import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <button>Log out</button>
        </div>
    );
};

export default Header;