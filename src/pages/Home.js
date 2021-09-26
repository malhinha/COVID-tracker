import React, { useState, useEffect } from 'react';
import SignIn from '../components/signIn';
import Header from '../components/header';
import LogSymptoms from '../components/LogSymptoms';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Home(props) {
	const user = localStorage.id;
	const token = localStorage.token;

	return (
		<div className="Home">
			<div>hellos</div>
			{!token ? (
				<SignIn />
			) : (
				<>
					<Header />
					<Link to={`/SignUp`}>
						<h3>Login Covid 19 Symptoms</h3>
					</Link>
					<LogSymptoms user={user} />

					<Link to={`/information`}>
						<h3>Information & Recommendations</h3>
					</Link>
				</>
			)}
		</div>
	);
}
