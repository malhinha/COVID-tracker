import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory
} from 'react-router-dom';

const RegisterInformation = props => {
	const [personal, setPersonal] = useState({});
	const [doctor, setDoctor] = useState({});
	const history = useHistory();

	const handleChangePersonal = e => {
		setPersonal({ ...personal, [e.target.id]: e.target.value });
	};

	const handleChangeDoctor = e => {
		setDoctor({ ...doctor, [e.target.id]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		console.log('entered submit');
		const allData = {
			...personal,
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
			console.log(data.token);
			console.log(data.user.email);
			// window.localStorage.setItem('token', data.token);
			// window.localStorage.setItem('loggedInUser', data.user.email);
		} catch (error) {
			console.error(error);
		}
		history.push('/login');
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
						onChange={handleChangePersonal}
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
					/>
				</div>
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
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
				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="firstName"
						type="text"
						placeholder="First Name"
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
						placeholder="Last Name"
						value={doctor.lastName}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="doctorphonenumber"
						type="number"
						placeholder="Phone Number"
						value={doctor.doctorPhone}
						onChange={handleChangeDoctor}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-wpforms icon"></i>
					<input
						className="input-field"
						id="facilityphonenumber"
						type="number"
						placeholder="Facility Phone Number"
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
			</form>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};
export default RegisterInformation;
