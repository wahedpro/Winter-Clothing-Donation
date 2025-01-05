import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <p>loading............</p>;
    }
    // If user is not authenticated, navigate to the login page
    if (!user) {
        return <Navigate state={{from:location}} to="/login"></Navigate>;
    }
    // Render children if user is authenticated
    return children;
};

export default PrivateRoute;
