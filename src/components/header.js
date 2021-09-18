import React, { useState, useEffect } from 'react';

const Header = props => {
	const [loggedInUser, setLoggedInUser] = useState('');
	const [token, setToken] = useState('');

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
		console.log(token);
		console.log(loggedInUser);
	}, []);

	const handleLogout = () => {
		setToken('');
		setLoggedInUser('');
		localStorage.clear();
	};

	return (
		<div>
			{!token ? (
				<div>
					<h3>CoviTRKR</h3>
				</div>
			) : (
				<div>
					<h3>CoviTRKR</h3>
					<p>Hello {loggedInUser}</p>
					<Link to={`/contact`}>
						<button onClick={handleLogout}>logout</button>
					</Link>
				</div>
			)}
		</div>
	);
};
export default Header;
