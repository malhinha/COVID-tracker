import React, { useState, useEffect } from 'react';
import StateDropDown from '../components/statedropdown.js';
import NumberWithCommas from '../components/NumberConvert.js';
import SimpleDateDisplay from '../components/SimpleDateDisplay.js';

export default function DataTable(props) {
	// array of states values
	const statesArray = [
		'AL',
		'AK',
		'AZ',
		'AR',
		'CA',
		'CO',
		'CT',
		'DC',
		'DE',
		'FL',
		'GA',
		'HI',
		'ID',
		'IL',
		'IN',
		'IA',
		'KS',
		'KY',
		'LA',
		'ME',
		'MD',
		'MA',
		'MI',
		'MN',
		'MS',
		'MO',
		'MT',
		'NE',
		'NV',
		'NH',
		'NJ',
		'NM',
		'NY',
		'NC',
		'ND',
		'OH',
		'OK',
		'OR',
		'PA',
		'RI',
		'SC',
		'SD',
		'TN',
		'TX',
		'UT',
		'VT',
		'VA',
		'WA',
		'WV',
		'WI',
		'WY'
	];

	// declare states for COVID API data
	const [dataGeneral, setDataGeneral] = useState({});
	const [dataRiskLevels, setDataRiskLevels] = useState({});
	const [dataActuals, setDataActuals] = useState({});

	// declare state for US state value
	const [location, setLocation] = useState(props.userState);

	const handleChangeLocation = e => {
		setLocation(e.target.value);
		console.log(`handleChange-state: ${location}`); // debugging

		(async () => {
			try {
				const response = await fetch(
					`https://api.covidactnow.org/v2/state/${location}.json?apiKey=13dc5eb460e54e28b9d950d83a05290f`
				);
				const data = await response.json();
				setDataGeneral(data);
				setDataRiskLevels(data.riskLevels);
				setDataActuals(data.actuals);
			} catch (error) {
				console.error(error);
			}
		})();
	};

	useEffect(() => {
		console.log(`useEffect-state: ${location}`); // debugging

		(async () => {
			try {
				const response = await fetch(
					`https://api.covidactnow.org/v2/state/${location}.json?apiKey=13dc5eb460e54e28b9d950d83a05290f`
				);
				const data = await response.json();
				setDataGeneral(data);
				setDataRiskLevels(data.riskLevels);
				setDataActuals(data.actuals);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [location]);

	return (
		<>
			<h2>COVID Data</h2>
			<div>
				<StateDropDown
					onChange={handleChangeLocation}
					array={statesArray}
					value={location}
				/>
			</div>

			<table>
				<tbody>
					<tr>
						<th>Risk Level</th>
						<td>{dataRiskLevels.overall}</td>
					</tr>
					<tr>
						<th>Total Cases</th>
						<td>
							<NumberWithCommas number={dataActuals.cases} />
						</td>
					</tr>
					<tr>
						<th>Daily New Cases</th>
						<td>
							<NumberWithCommas number={dataActuals.newCases} />
						</td>
					</tr>
					<tr>
						<th>Deaths</th>
						<td>
							<NumberWithCommas number={dataActuals.deaths} />
						</td>
					</tr>
					<tr>
						<th>Daily New Deaths</th>
						<td>
							<NumberWithCommas number={dataActuals.newDeaths} />
						</td>
					</tr>
					<tr>
						<th>Negative Tests</th>
						<td>
							<NumberWithCommas number={dataActuals.negativeTests} />
						</td>
					</tr>
					<tr>
						<th>Positive Tests</th>
						<td>
							<NumberWithCommas number={dataActuals.positiveTests} />
						</td>
					</tr>
					<tr>
						<th>Vaccines Administered</th>
						<td>
							<NumberWithCommas number={dataActuals.vaccinesAdministered} />
						</td>
					</tr>
					<tr>
						<th>Last Update</th>
						<td>
							<SimpleDateDisplay date={dataGeneral.lastUpdatedDate} />
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
