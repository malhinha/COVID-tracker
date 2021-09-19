import React from 'react';
import App from '../pages/App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import LogSymptoms from '../pages/LogSymptoms';
import Information from '../pages/Information';
import Register from '../pages/Register';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: LogSymptoms,
		key: 'LogSymptoms',
		path: '/logSymptoms'
	},
	{
		Component: Information,
		key: 'Information',
		path: '/information'
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
