import React from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

    const authInfo = {createUserGoogle, createUserGithub};
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;