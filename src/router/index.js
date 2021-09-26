import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from '../pages/App';
import Register from '../pages/Register';

const AppRouter = () => {
	return (
		<div>
			<Router>
				<nav className="navbar navbar-dark bg-dark">
					<Link className="link" to="/">
						CovidTrkr
					</Link>
				</nav>
				<Switch>
					<Route exact path="/">
						<App />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default AppRouter;
