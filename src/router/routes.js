import React from 'react';
import App from '../pages/App';
import Register from '../pages/Register';
import SignUp from '../pages/SignUp';

const routes = [
	{
		Component: SignUp,
		key: 'SignUp',
		path: '/SignUp'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	},
	{
		Component: Register,
		key: 'Register',
		path: '/register'
	}
];

export default routes;
