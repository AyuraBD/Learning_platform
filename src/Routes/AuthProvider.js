import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    //Login with google
    const createUserGoogle = () =>{
        return signInWithPopup(auth, provider);
    }
    const authInfo = {createUserGoogle,};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;