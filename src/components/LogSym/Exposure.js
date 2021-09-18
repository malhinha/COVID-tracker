import React from 'react';

export default function Exposure(props) {
	return (
		<>
			<textarea
				type="text"
				placeholder={props.placeholder}
				name={props.name}
				onChange={props.onChange}
			/>
		</>
	);
}
