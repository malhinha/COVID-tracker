import React from 'react';

export default function CheckBoxForm(props) {
	return (
		<>
			<input
				type="checkbox"
				id={props.name}
				onChange={props.onChange}
				name={props.name}
			/>
			<label htmlFor={props.name}>{props.label}</label>
		</>
	);
}
