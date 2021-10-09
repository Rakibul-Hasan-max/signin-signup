import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <button>Google Sign In</button>
            <br />
            <Link to="/register">Register now</Link>
        </div>
    );
};

export default Login;