import {createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile} from "firebase/auth";
import React, { createContext, useEffect, useState} from 'react';
import auth from "../firebase/firebase.config";

export const authContext= createContext();

const AuthProvider = ({children}) => {

    const GoogleProvider = new GoogleAuthProvider();

    const [user, setUser]=useState();

    const [loading, setLoading]= useState(true);

    const handleRegister = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleLoginWithGoogle=()=>{
        return signInWithPopup(auth, GoogleProvider);
    }

    const handleManageProfile=(name,images)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:images
        })
    }

    const updateUserProfile = (name, photoURL) => {
        if (!auth.currentUser) return Promise.reject("No user is logged in.");
        return updateProfile(auth.currentUser, { displayName: name, photoURL }).then(() => {
            setUser({ ...auth.currentUser, displayName: name, photoURL });
        });
    };
    
    const handleLogout = ()=>{
        signOut(auth);
    }

    const authInfo={
        user,
        setUser,
        handleRegister,
        handleLogin,
        handleLoginWithGoogle,
        handleManageProfile,
        handleLogout,
        updateUserProfile,
        loading,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            if(currentUser){
                setUser(currentUser);
            }else{
                setUser(null);
            }
            setLoading(false);
            return ()=>{
                unsubscribe();
            }
        })
    },[])

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;