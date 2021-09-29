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
		history.push('/');
	};

	return (
		<div className="header-bg">
			{!window.localStorage.getItem('token') ? (
				<div>
					<div className="header-covid">CoviTRKR</div>
				</div>
			) : (
				<div>
					<div className="header-covid">CoviTRKR</div>
					<p>Hello {window.localStorage.getItem('loggedInUser')}</p>
					<div>
						<button className="btn reg-btn" onClick={handleLogout}>
							Logout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
export default withRouter(Header);
