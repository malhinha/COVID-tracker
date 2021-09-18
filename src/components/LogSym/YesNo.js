import React from 'react';

export default function YesNo(props) {
	return (
		<>
			<p>{props.text}</p>
			<div onChange={props.onChange}>
				<input
					type="radio"
					id={`${props.name}-yes`}
					name={props.name}
					value={true}
				/>
				<label htmlFor={`${props.name}-yes`}>Yes</label>

				<input
					type="radio"
					id={`${props.name}-no`}
					name={props.name}
					value={false}
				/>
				<label htmlFor={`${props.name}-no`}>No</label>
			</div>
		</>
	);
}
