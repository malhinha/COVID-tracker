import React from 'react';
import App from '../pages/App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Login,
		key: 'Login',
		path: '/login'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: Register,
		key: 'Register',
		path: '/register'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
