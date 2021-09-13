import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const SignIn = props => {
	const [signin, setSignin] = useState([]);

	const handleChange = e => {
		setSignin({ ...signin, [e.target.id]: e.target.value });
	};

	return (
		<div>
			<h3>Sign in to your account</h3>
			<form>
				<div className="input-container">
					<i className="fa fa-user icon"></i>
					<input
						className="input-field"
						id="username"
						type="text"
						placeholder="Username"
						name="username"
						value={signin.username}
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
			<button type="button">Login</button> <br />
			<Link to="/register">
				<button type="button">Register</button>
			</Link>
		</div>
	);
};
export default SignIn;
