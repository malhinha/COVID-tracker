import React from 'react';

export default function Button(props) {
	return (
		<>
			<button
				className="btn signIn-btn"
				id={props.id}
				type={props.type}
				value={props.value}
			>
				{props.value}
			</button>
		</>
	);
}
