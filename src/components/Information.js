import React, { useState, useEffect } from 'react';
import StateDropDown from '../components/statedropdown.js';

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

	// declare state for COVID data object
	const [results, setResults] = useState({});
	// declare state for US state value
	const [location, setLocation] = useState('NY');

	const handleChangeLocation = e => {
		setLocation(e.target.value);
		console.log(`handleChange-state: ${location}`); // debugging
	};

	useEffect(() => {
		(async () => {
			try {
				console.log(`useEffect-state: ${location}`); // debugging
				const response = await fetch(
					`https://api.covidactnow.org/v2/state/${location}.json?apiKey=13dc5eb460e54e28b9d950d83a05290f`
				);
				const data = await response.json();
				console.log(`data.fips: ${data.fips}`); // debugging
				console.log(`data.riskLevels.overall: ${data.riskLevels.overall}`); // debugging

				setResults(data);
				console.log(`results.fips: ${results.fips}`); // debugging
				console.log(
					`results.riskLevels.overall: ${results.riskLevels.overall}`
				); // debugging
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
						<th>FIPS Code</th>
						<td>{results.fips}</td>
					</tr>
					<tr>
						<th>CDC Transmission Level</th>
						<td>{results.cdcTransmissionLevel}</td>
					</tr>
					<tr>
						<th>Last Update</th>
						<td>{results.lastUpdatedDate}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
