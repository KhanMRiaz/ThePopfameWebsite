import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const Layout = (props) => {
	const location = useLocation().pathname;
	return (
		<>
			<Header />
			{props.children}
			{location !== '/login' && location !== '/' && location !== '/chat' && <Footer />}

		</>
	)
}

export default Layout
