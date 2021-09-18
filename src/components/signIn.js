import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const SignIn = props => {
	const [signin, setSignin] = useState([]);

	const handleChange = e => {
		setSignin({ ...signin, [e.target.id]: e.target.value });
	};

	const handleLogin = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(signin)
			});
			const data = await response.json();
			setToken(data.token);
			setLoggedInUser(data.email);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.email);
		} catch (error) {
			console.error(error);
		}
		history.push('/contact');
	};

	return (
		<div>
			<h3>Sign in to your account</h3>
			<form>
				<div className="input-container">
					<i className="fa fa-user icon"></i>
					<input
						className="input-field"
						id="email"
						type="text"
						placeholder="User Email"
						name="email"
						value={signin.email}
						onChange={handleChange}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-key icon"></i>
					<input
						className="input-field"
						id="password"
						type="password"
						placeholder="Password"
						name="password"
						value={signin.password}
						onChange={handleChange}
					/>
				</div>
			</form>
			<button type="button" onClick={handleLogin}>
				Login
			</button>{' '}
			<br />
			<Link to="/register">
				<button type="button">Register</button>
			</Link>
		</div>
	);
};
export default SignIn;
