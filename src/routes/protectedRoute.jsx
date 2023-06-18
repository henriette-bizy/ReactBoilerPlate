import React from 'react'
import { Navigate } from 'react-router-dom';
import authStorage from '../util/storage';

export const ProtectedRoute = () => {
    return authStorage.getToken() ? children : <Navigate to='/login'/>
}



