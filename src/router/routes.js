import React from 'react';
import Home from '../pages/Home';
import Register from '../pages/Register';
import SignUp from '../pages/SignUp';

const routes = [
	{
		Component: SignUp,
		key: 'SignUp',
		path: '/SignUp'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: Register,
		key: 'Register',
		path: '/register'
	}
];

export default routes;
