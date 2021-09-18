import React from 'react';

export default function Symptoms(props) {
	return (
		<>
			<p>
				Log Symptoms daily to help monitor for symptoms of COVID-19 and to keep
				you safe. The questions below are based on CDC guidance related to
				COVID-19. The following questions and informaiton are not nor intedned
				to be, medical advice, treatment, or diagnosis. Please contact your
				doctor if you have any questions or concerns related to COVID-19.
			</p>
			<p>Are you experiencing any of the following symptoms:</p>
			<div>
				<div>{props.checkList}</div>
			</div>
		</>
	);
}
