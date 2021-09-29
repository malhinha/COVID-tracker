import React from 'react';

export default function Symptoms(props) {
	return (
		<div className="global-container">
			<div className="d-flex flex-sm-row">
				<div className="signIn-form">
					<h5 className="p-4 reg-title-card">
						Log Symptoms daily to help monitor for symptoms of COVID-19 and to
						keep you safe. The questions below are based on CDC guidance related
						to COVID-19. The following questions and informaiton are not nor
						intedned to be, medical advice, treatment, or diagnosis. Please
						contact your doctor if you have any questions or concerns related to
						COVID-19.
					</h5>
				</div>
				<div className="p-4">
					Are you experiencing any of the following symptoms:
				</div>
				<div>
					<div className="p-4">{props.checkList}</div>
				</div>
			</div>
		</div>
	);
}
