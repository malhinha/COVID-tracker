import React from 'react';

export default function CheckBoxForm(props) {
	return (
		<>
			<input
				type="checkbox"
				className="text-center log-gif-one"
				id={props.name}
				onChange={props.onChange}
				name={props.name}
			/>
			<label htmlFor={props.name}>{props.label}</label>
		</>
	);
}
