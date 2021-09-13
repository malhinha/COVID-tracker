import React, { useState } from 'react';

const MedicalInformation = props => {
	const [medicalInfo, setMedicalInfo] = useState([]);

	const handleChange = e => {
		setMedicalInfo({ ...medicalInfo, [e.target.id]: e.target.value });
	};

	return (
		<div>
			<h3>Medical Information</h3>
			<form>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="doctorname"
						type="text"
						placeholder="Doctor Name"
						name="doctorname"
						value={medicalInfo.doctorname}
						onChange={handleChange}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="doctorphonenumber"
						type="number"
						placeholder="Doctor Phone Number"
						name="doctorphonenumber"
						value={medicalInfo.doctorphonenumber}
						onChange={handleChange}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="doctoremail"
						type="text"
						placeholder="Doctor Email"
						name="doctoremail"
						value={medicalInfo.doctoremail}
						onChange={handleChange}
					/>
				</div>

				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="doctorzipcode"
						type="text"
						placeholder="Doctor Zip Code"
						name="doctorzipcode"
						value={medicalInfo.doctorzipcode}
						onChange={handleChange}
					/>
				</div>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="facilityphonenumber"
						type="number"
						placeholder="Facility Phone Number"
						name="facilityphonenumber"
						value={medicalInfo.email}
						onChange={handleChange}
					/>
				</div>
				<div class="input-container">
					<i class="fa fa-wpforms icon"></i>
					<input
						class="input-field"
						id="facilityphonenumber"
						type="text"
						placeholder="Facility Phone Number"
						name="facilityphonenumber"
						value={medicalInfo.password}
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
};
export default MedicalInformation;
