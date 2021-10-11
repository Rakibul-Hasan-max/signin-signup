import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const[user, setUser] = useState({});
    const[error, setError] = useState('');
  
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
        })
        .catch((error) => {
            setError(error.message);
        })
    }


    const signInUsingGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
        })
        .catch((error) => {
            setError(error.message);
        })
    }


    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser ({});
            })
    }


    useEffect(() => {
        onAuthStateChanged (auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])


    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGitHub,
        logout
    }
};


export default useFirebase;