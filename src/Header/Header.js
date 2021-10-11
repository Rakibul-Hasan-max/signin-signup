import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
// import useFirebase from '../Hooks/useFirebase';
import css from './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <p>{user.displayName} </p>
            {user?.email && <button onClick={logout}>Log out</button>}
        </div>
    );
};

export default Header;