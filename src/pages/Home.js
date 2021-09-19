import React, { useState } from 'react';
import Header from '../components/header';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Home(props) {
	return (
		<div>
			<Header />
			<Link to={`/logSymptoms`}>
				<h3>Login Covid 19 Symptoms</h3>
			</Link>

			<Link to={`/information`}>
				<h3>Information & Recommendations</h3>
			</Link>
		</div>
	);
}
