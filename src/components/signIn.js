import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory
} from 'react-router-dom';

const SignIn = props => {
	const [signin, setSignin] = useState({});
	const history = useHistory();
	const handleChange = e => {
		setSignin({ ...signin, [e.target.id]: e.target.value });
	};

	const handleLogin = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(signin)
			});
			const data = await response.json();

			if (data.message) {
				alert(data.message);
				return;
			}
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.email);
			window.localStorage.setItem('id', data.user.id);
			window.localStorage.setItem('userState', data.user.state);
		} catch (error) {
			console.error(error);
		}
		history.push('/');
	};

	return (
		<div className="global-container card-body">
			<div className="card signIn-form text-center col-lg-6 col-md-6 col-sm-6 col-xl-4">
				<h2 className="center-text reg-card-title">Sign in to your account</h2>
				<form onSubmit={handleLogin}>
					<div className="input-container center-text">
						<i className="fa fa-user icon"></i>
						<input
							className="input-field center-text"
							id="email"
							type="text"
							placeholder="User Email"
							name="email"
							value={signin.email}
							onChange={handleChange}
							required
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
							required
						/>
					</div>

					<input type="submit" className="btn signIn-btn" value="LOGIN" />
				</form>

				<br />
				<h4 className="signIn-card-title p-2">Don't have an account?</h4>
				<Link to="/register">
					<button type="button" className="btn reg-btn">
						REGISTER
					</button>
				</Link>
			</div>
		</div>
	);
};
export default SignIn;
