import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const location = useLocation()
    const {user} = use(AuthContext)

    if(user){
        return children
    }

    return  <Navigate to='/login' state={location?.pathName }>Login</Navigate>
    
};

export default PrivateRoutes;