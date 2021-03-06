import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
// import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle, signInUsingGitHub} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <button onClick={signInUsingGitHub}>GitHub Sign In</button>
            <br />
            <Link to="/register">Register now</Link>
        </div>
    );
};

export default Login;