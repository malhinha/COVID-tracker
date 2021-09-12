import React from 'react';
import CheckBoxForm from './CheckBoxForm';
import symptomOptions from './symptomOptions';
import LogHead from '../../LogSym/LogHead.js';
import YesNo from '../../LogSym/YesNo.js';

export default function Symptoms(props) {
	const symptomForm = symptomOptions.map((symptom, index) => {
		return (
			<div key={index}>
				<CheckBoxForm label={symptom.symptom} id={symptom.id} />
			</div>
		);
	});

	return (
		<>
			<LogHead />
			<p>
				Log Symptoms daily to help monitor for symptoms of COVID-19 and to keep
				you safe. The questions below are based on CDC guidance related to
				COVID-19. The following questions and informaiton are not nor intedned
				to be, medical advice, treatment, or diagnosis. Please contact your
				doctor if you have any questions or concerns related to COVID-19.
			</p>
			<p>Are you experiencing any of the following symptoms:</p>
			<div>
				<div>{symptomForm}</div>
				<YesNo text="Are you experiencing any life threatening symptoms?" />
			</div>
		</>
	);
}
