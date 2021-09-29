import React from 'react';
import App from '../pages/App';
import Register from '../pages/Register';

const routes = [
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
