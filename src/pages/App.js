import React, { useState, useEffect } from 'react';
import LogSymptoms from '../components/LogSymptoms';
import DataTable from '../components/Information';
import Register from '../pages/Register';
import SignIn from '../components/signIn';
import Header from '../components/header';

export default function App(props) {
	let token = window.localStorage.getItem('token');
	let userId = window.localStorage.getItem('id');
	let userState = window.localStorage.getItem('userState');

	return (
		<div className="Home">
			<Header />
			{!token ? (
				<>
					<SignIn />
				</>
			) : (
				<>
					<LogSymptoms userId={userId} token={token} />
					<DataTable userState={userState} />
				</>
			)}
		</div>
	);
}
