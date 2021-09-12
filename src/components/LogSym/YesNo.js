import React, { useState } from 'react';

export default function YesNo(props) {
	const [checked, setChecked] = useState(null);

	// const handleChange = e => {
	// 	setChecked({ ...checked, [e.target.id]: e.target.value });
	// };

	return (
		<>
			<p>{props.text}</p>
			<div>
				<div>
					<input
						type="radio"
						name="Yes"
						id="Yes"
						value="true"
						checked={checked === true}
						onChange={() => setChecked(true)}
					/>
					<label htmlFor="yes">Yes</label>
				</div>
				<div>
					<input
						type="radio"
						id="No"
						name="No"
						value="false"
						checked={checked === false}
						onChange={() => setChecked(false)}
					/>
					<label htmlFor="No">No</label>
				</div>
			</div>
		</>
	);
}
