import React from 'react';
import Login from '../Pages/Login';

const PrivateRoute = ({component: Component}) => {
    let isLogin = true;     
    return isLogin ? <Component/> : <Login/>
} 

export default PrivateRoute;