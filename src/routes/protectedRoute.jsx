import React from 'react'
import { Navigate } from 'react-router-dom';
import auth from '../util/storage';

export const ProtectedRoute = ({children}) => {
    return auth.getToken() ? children : <Navigate to='/login'/>
}



