import React from 'react';

export default function Button(props) {
	return (
		<>
          <button
              id={props.id}
              type={props.type}
              value={props.value}
            >
            </button>
		</>
	);
}
