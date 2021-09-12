import React, { useState } from 'react';

export default function CheckBoxForm(props) {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<input
				type="checkbox"
				id={props.id}
				checked={checked}
				onChange={e => setChecked(e.target.checked)}
			/>
			<label htmlFor={props.id} value={props.label}>
				{props.label}
			</label>
		</>
	);
}
