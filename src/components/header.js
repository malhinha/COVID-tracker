import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory
} from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = props => {
	const history = useHistory();

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			window.localStorage.getItem('loggedInUser');
		}
	}, []);

	const handleLogout = () => {
		localStorage.clear();
		history.push('/login');
	};

	return (
		<div>
			{!window.localStorage.getItem('token') ? (
				<div>
					<h3>CoviTRKR</h3>
				</div>
			) : (
				<div>
					<h3>CoviTRKR</h3>
					<p>Hello {window.localStorage.getItem('loggedInUser')}</p>
					<Link to={`/login`}>
						<button onClick={handleLogout}>logout</button>
					</Link>
				</div>
			)}
		</div>
	);
};
export default withRouter(Header);
