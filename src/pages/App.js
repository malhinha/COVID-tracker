import React, { useState, useEffect } from 'react';
import LogSymptoms from '../pages/LogSymptoms';
import Information from '../pages/Information';
import Register from '../pages/Register';
import SignIn from '../components/signIn';
import Header from '../components/header';

export default function App(props) {
	let token = '';

	useEffect(() => {
		token = window.localStorage.getItem('token');
		console.log('Main page token = ' + token);
	}, []);

	return (
		<div>
			<>
				<Header />
				<SignIn />
				<LogSymptoms />
				<Information />
			</>
		</div>
	);
}
