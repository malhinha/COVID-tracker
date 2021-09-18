import React, { useState } from 'react';
import Header from '../components/header';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Home(props) {
	return (
		<div>
			<Header />
			<h3>Login Covid 19 Symptoms</h3>
			<h3>Information & Recommendations</h3>
		</div>
	);
}
