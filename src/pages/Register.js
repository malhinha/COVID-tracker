import React, { useState } from 'react';
import Header from '../components/header';
import RegisterInformation from '../components/registerinfo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Register(props) {
	return (
		<div>
			<Header />
			<RegisterInformation />
		</div>
	);
}
