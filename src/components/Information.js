import React, { useState, useEffect } from 'react';

export default function DataTable(props) {
	// declare state for COVID data object
	const [results, setResults] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`https://api.covidactnow.org/v2/state/NJ.json?apiKey=13dc5eb460e54e28b9d950d83a05290f`
				);
				const data = await response.json();
				console.log(`data.fips: ${data.fips}`); // debugging
				console.log(`data.riskLevels.overall: ${data.riskLevels.overall}`); // debugging

				setResults({ ...data });
				console.log(`results.fips: ${results.fips}`); // debugging
				console.log(
					`results.riskLevels.overall: ${results.riskLevels.overall}`
				); // debugging
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<>
			<h2>COVID Data</h2>
			<div>
				{/* place holder until state selection component is complete */}
				<select name="states" id="states">
					<option value="CA">California</option>
					<option value="NJ">New Jersey</option>
					<option value="NY">New York</option>
					<option value="TX">Texas</option>
				</select>
				{/* */}
			</div>

			<table>
				<tbody>
					<tr>
						<th>Risk Level</th>
						<td>{results.fips}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
