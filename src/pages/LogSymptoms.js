import React, { useState, useEffect } from 'react';
import Exposure from '../components/LogSym/Exposure';
import Symptoms from '../components/LogSym/Symptoms/Symptoms';
import YesNo from '../components/LogSym/YesNo';
import CheckBoxForm from '../components/LogSym/Symptoms/CheckBoxForm';
import LogHead from '../components/LogSym/LogHead';
import symptomOptions from '../components/LogSym/Symptoms/symptomOptions';

export default function LogSympmtoms(props) {
	const [state, setState] = useState({
		smellOrTaste: false,
		achesOrFatigue: false,
		headache: false,
		fever: false,
		cough: false,
		breathing: false,
		soreThroat: false,
		congestion: false,
		diarrheaOrVomiting: false,
		lifeThreatening: false,
		exposed: false,
		exposedHow: '',
		healthProvider: false,
		sentToDoc: false,
		sharedPublicly: false
	});

	function toBool(value) {
		if (value === 'true') {
			return true;
		} else if (value === 'false') {
			return false;
		} else {
			return value;
		}
	}

	const handleChange = e => {
		setState({ ...state, [e.target.name]: toBool(e.target.value) });
	};

	const handleCheckChange = e => {
		setState({ ...state, [e.target.name]: e.target.checked });
	};

	// const handleSubmit = () = {
	// 	console.log("submatted")
	// }

	//Should i be doing something similar with the radio buttons? They were annoying due to value being different for them. I could do an array again to map over, the only thing that binds radio buttons is the name so as long as the name is fine it should be fine? Maybe that's easier? Unsure.
	const symptomForm = symptomOptions.map((symptom, index) => {
		return (
			<div key={index}>
				<CheckBoxForm
					label={symptom.symptom}
					id={symptom.name}
					name={symptom.name}
					onChange={handleCheckChange}
				/>
			</div>
		);
	});

	return (
		<form className="LogSympmtoms">
			{/*LogHead was just the header no real reason to have a componet tbh.*/}
			<LogHead text={'Log Symptoms'} />
			{/*This is maping over the symptoms array, to create the checkboxes and then you see the radio button compnet asking if it's severe*/}
			<Symptoms checkList={symptomForm} />
			<YesNo
				text={'Are you experincing any life threatening symptoms?'}
				name={'lifeThreatening'}
				onChange={handleChange}
			/>
			{/*This is the check to see if theyve been exposed and a conditional to
			show the textbox*/}
			<YesNo
				text={'To your best knowldge were you directly exposed to COVID-19?'}
				name={'exposed'}
				onChange={handleChange}
			/>
			{/*This is the conditional that is checking if exposure in the state is
			"true". It is written like this, because setting it to check a boolean was
			making hyst seeing if the value of exposure was true, and I didn't want to
			add another state.*/}
			{state.exposed && (
				<Exposure
					text={'To the best of your knowldge, how were you exposed?'}
					name={'exposedHow'}
					placeholder={'Please enter your response here.'}
					onChange={handleChange}
				/>
			)}
			{/*this is asking if we have a healthcare provier we can contact, if yes do nothing? If no we open a map from good maps. Have to build. Worst case we have a picture and say upcoming feature.*/}
			<YesNo
				text={'Do you have a healthcare provider you can can contact?'}
				name={'healthProvider'}
				onChange={handleChange}
			/>
			{/*This is asking consent to be sent to your doctor. Not sure what we're
			doing with this?*/}
			<YesNo
				text={'Would you like your information to be sent to your doctor?'}
				name={'sentToDoc'}
				onChange={handleChange}
			/>
			{/*This is asking consent to share the information. Again not sure what
			we're doing with this.*/}
			<YesNo
				text={
					'Would you like your symptoms shared publicly within the CoviTRKR system? (No personal information is shared within the system. Only symptpms, exposures, and general location are shared within the network to help bring community awareness of COVID exposure levels).'
				}
				name={'sharedPublicly'}
				onChange={handleChange}
			/>
			{/*I still need to create buttons for this page, but not sure how many, submit and contact docotr? not sure need to regroup*/}
		</form>
	);
}
