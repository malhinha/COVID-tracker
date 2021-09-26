import React from 'react';

export default function StateDropDown(props) {
	return (
		<>
			<select
				value={props.value}
				placeholder="State"
				autoFocus={true}
				onChange={props.onChange}
				required
			>
				{props.array.map(value => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
		</>
	);
}
