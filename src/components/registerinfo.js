import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const RegisterInformation = props => {
	const [personal, setPersonal] = useState({});
	const [doctor, setDoctor] = useState({});
	const [token, setToken] = useState(''); //user has been authenticated
	const [loggedInUser, setLoggedInUser] = useState('');

	const handleChangePersonal = e => {
		setPersonal({ ...personal, [e.target.id]: e.target.value });
		console.log(personal);
	};

	const handleChangeDoctor = e => {
		setDoctor({ ...doctor, [e.target.id]: e.target.value });
		console.log(doctor);
	};

	const handleSubmit = async e => {
		console.log('submitting');

		e.preventDefault();
		const allData = {
			...personal,
			doctor: { ...doctor }
		};
		console.log(allData);
		try {
			const responsepersonal = await fetch('/api/users/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(allData)
			});
			const data = await response.json();
			setToken(data.token);
			setLoggedInUser(data.allData.email);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.allData.email);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h3>Register your account</h3>

			<h3>Personal Information</h3>
			<form onSubmit={handleSubmit}>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="firstName"
						type="text"
						placeholder="First Name"
						value={personal.firstName}
						onChange={handleChangePersonal}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="lastName"
						type="text"
						placeholder="Last Name"
						value={personal.lastName}
						onChange={handleChangePersonal}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="dateOfBirth"
						type="date"
						placeholder="Date of Birth"
						value={personal.dateOfBirth}
						onChange={handleChangePersonal}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="zipCode"
						type="number"
						placeholder="Zip Code"
						value={personal.zipCode}
						onChange={handleChangePersonal}
					/>
				</div>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="email"
						type="text"
						placeholder="Email"
						value={personal.email}
						onChange={handleChangePersonal}
					/>
				</div>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="password"
						type="text"
						placeholder="Password"
						value={personal.password}
						onChange={handleChangePersonal}
					/>
				</div>
			</form>

			<h3>Medical Information</h3>
			<form>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="firstName"
						type="text"
						placeholder="First Name"
						value={doctor.firstName}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="lastName"
						type="text"
						placeholder="Last Name"
						value={doctor.lastName}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="doctorphonenumber"
						type="number"
						placeholder="Phone Number"
						value={doctor.doctorPhone}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="facilityphonenumber"
						type="number"
						placeholder="Facility Phone Number"
						value={doctor.email}
						onChange={handleChangeDoctor}
					/>
				</div>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="facilityName"
						type="text"
						placeholder="Facility Name"
						value={doctor.facilityName}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="facilityLocation"
						type="text"
						placeholder="Facility Location"
						value={doctor.facilityLocation}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="facilityNumber"
						type="text"
						placeholder="Facility Phone Number"
						value={doctor.facilityNumber}
						onChange={handleChangeDoctor}
					/>
				</div>
				<button type="button">Submit Registration</button>
			</form>
		</div>
	);
};
export default RegisterInformation;
