import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../Pages/Login';

const PrivateRoute = ({ component: Component }) => {
	const token = useSelector((state) => state?.user?.user?.data?.token)
	return token ? <Component /> : <Login />
}

export default PrivateRoute;