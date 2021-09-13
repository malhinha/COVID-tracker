import React, { useState } from 'react';
import SignIn from '../components/signIn';
import Header from '../components/header';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<Header />
			<SignIn />
		</div>
	);
}
