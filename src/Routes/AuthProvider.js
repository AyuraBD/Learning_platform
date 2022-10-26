import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //Login with google
    const createUserGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    //Login with Github
    const createUserGithub = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    //Create user with email and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Login with email and password
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        createUserGoogle,
        createUserGithub,
        createUser,
        logIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;