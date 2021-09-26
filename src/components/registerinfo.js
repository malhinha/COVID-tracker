import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory
} from 'react-router-dom';
import StateDropDown from '../components/statedropdown.js';

const RegisterInformation = props => {
	const [personal, setPersonal] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		dateOfBirth: ''
	});
	const [location, setLocation] = useState({
		state: '',
		city: '',
		zipCode: ''
	});
	const [doctor, setDoctor] = useState({
		firstName: '',
		lastName: '',
		doctorPhone: '',
		email: '',
		facilityName: '',
		facilityLocation: '',
		facilityNumber: ''
	});
	const history = useHistory();
	const [confirmPassword, setConfirmPassword] = useState({
		cpassword: ''
	});
	const statesArray = [
		'AL',
		'AK',
		'AZ',
		'AR',
		'CA',
		'CO',
		'CT',
		'DC',
		'DE',
		'FL',
		'GA',
		'HI',
		'ID',
		'IL',
		'IN',
		'IA',
		'KS',
		'KY',
		'LA',
		'ME',
		'MD',
		'MA',
		'MI',
		'MN',
		'MS',
		'MO',
		'MT',
		'NE',
		'NV',
		'NH',
		'NJ',
		'NM',
		'NY',
		'NC',
		'ND',
		'OH',
		'OK',
		'OR',
		'PA',
		'RI',
		'SC',
		'SD',
		'TN',
		'TX',
		'UT',
		'VT',
		'VA',
		'WA',
		'WV',
		'WI',
		'WY'
	];

	const handleChangePersonal = e => {
		setPersonal({ ...personal, [e.target.id]: e.target.value });
	};

	const handleChangeConfirmPassword = e => {
		setConfirmPassword({ ...confirmPassword, [e.target.id]: e.target.value });
	};

	const handleChangeDoctor = e => {
		setDoctor({ ...doctor, [e.target.id]: e.target.value });
	};
	const handleChangeLocation = e => {
		setLocation({ ...location, [e.target.id]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (personal.password !== confirmPassword.cpassword) {
			alert('Passwords do not match');
			setPersonal({ ...personal, password: '' });
			setConfirmPassword({ cpassword: '' });
			return;
		}

		const allData = {
			...personal,
			location: { ...location },
			doctor: { ...doctor }
		};
		try {
			const response = await fetch('/api/users/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(allData)
			});

			const data = await response.json();
			if (data.message) {
				alert(data.message);
				return;
			}
			// window.localStorage.setItem('token', data.token);
			// window.localStorage.setItem('loggedInUser', data.user.email);
		} catch (error) {
			console.error(error);
		}
		history.push('/');
	};

	return (
		<div>
			<h3>Register your account</h3>

			<h3>Personal Information</h3>
			<form onSubmit={handleSubmit}>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="firstName"
						type="text"
						placeholder="First Name"
						value={personal.firstName}
						onChange={handleChangePersonal}
						required
					/>
				</div>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="lastName"
						type="text"
						placeholder="Last Name"
						value={personal.lastName}
						onChange={handleChangePersonal}
						required
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="dateOfBirth"
						type="date"
						placeholder="Date of Birth"
						value={personal.dateOfBirth}
						onChange={handleChangePersonal}
						required
					/>
				</div>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="city"
						type="text"
						placeholder="City"
						value={location.city}
						onChange={handleChangeLocation}
						required
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<StateDropDown
						onChange={handleChangeLocation}
						array={statesArray}
						value={location.state}
					/>
				</div>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="zipCode"
						type="number"
						placeholder="Zip Code"
						value={personal.zipCode}
						onChange={handleChangeLocation}
						required
					/>
				</div>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="email"
						type="text"
						placeholder="Email"
						value={personal.email}
						onChange={handleChangePersonal}
						required
					/>
				</div>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="password"
						type="password"
						placeholder="Password"
						value={personal.password}
						onChange={handleChangePersonal}
						required
					/>
				</div>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="cpassword"
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword.cpassword}
						onChange={handleChangeConfirmPassword}
						required
					/>
				</div>

				<h3>Medical Information</h3>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="firstName"
						type="text"
						placeholder="Physician First Name"
						value={doctor.firstName}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="lastName"
						type="text"
						placeholder="Physician Last Name"
						value={doctor.lastName}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="doctorPhone"
						type="number"
						placeholder="Physician Phone Number"
						value={doctor.doctorPhone}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="email"
						type="text"
						placeholder="Physician email"
						value={doctor.email}
						onChange={handleChangeDoctor}
					/>
				</div>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="facilityName"
						type="text"
						placeholder="Facility Name"
						value={doctor.facilityName}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="facilityLocation"
						type="text"
						placeholder="Facility Location"
						value={doctor.facilityLocation}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="facilityNumber"
						type="text"
						placeholder="Facility Phone Number"
						value={doctor.facilityNumber}
						onChange={handleChangeDoctor}
					/>
				</div>
				<input type="submit" value="SUBMIT" />
			</form>
		</div>
	);
};
export default RegisterInformation;
