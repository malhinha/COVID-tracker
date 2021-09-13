import React, { useState } from 'react';
import Header from '../components/header';
import MedicalInformation from '../components/medicalinformation';
import PersonalInformation from '../components/personalinformation';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Register(props) {
	return (
		<div>
			<Header />
			<PersonalInformation />
			<MedicalInformation />
			<Link to="/contact">
				<button type="button">Submit Registration</button>
			</Link>
		</div>
	);
}
