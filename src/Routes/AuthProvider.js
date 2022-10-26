import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
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

    //LogOut 
    const logOut = () =>{
        return signOut(auth);
    }

    //Update User profile
    const userProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    })
    const authInfo = {
        user,
        createUserGoogle,
        createUserGithub,
        createUser,
        logIn,
        logOut,
        userProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;