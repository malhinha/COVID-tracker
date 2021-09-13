import React, { useState } from 'react';

const PersonalInformation = props => {
	const [personalInfo, setPersonalInfo] = useState([]);

	const handleChange = e => {
		setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });
	};

	return (
		<div>
			<h3>Register your account</h3>

			<h3>Personal Information</h3>
			<form>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="firstname"
						type="text"
						placeholder="First Name"
						name="firstname"
						value={personalInfo.firstname}
						onChange={handleChange}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="lastname"
						type="text"
						placeholder="Last Name"
						name="lastname"
						value={personalInfo.lastname}
						onChange={handleChange}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="dateofbirth"
						type="date"
						placeholder="Date of Birth"
						name="dateofbirth"
						value={personalInfo.dateofbirth}
						onChange={handleChange}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="zipcode"
						type="number"
						placeholder="Zip Code"
						name="zipcode"
						value={personalInfo.zipcode}
						onChange={handleChange}
					/>
				</div>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="email"
						type="text"
						placeholder="Email"
						name="email"
						value={personalInfo.email}
						onChange={handleChange}
					/>
				</div>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="password"
						type="text"
						placeholder="Password"
						name="password"
						value={personalInfo.password}
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
};
export default PersonalInformation;
