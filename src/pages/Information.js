import React, { useState, useEffect } from 'react';
import SignIn from '../components/signIn';
import Header from '../components/header';

export default function CovidData(props) {
	// declare state for COVID data object
	const [results, setResults] = useState({});

	// fetch data from API, parse JSON to JS, load to state
	const getData = async () => {
		try {
			const response = await fetch(
				`https://api.covidactnow.org/v2/state/NJ.json?apiKey=13dc5eb460e54e28b9d950d83a05290f`
			);
			const data = await response.json();
			setResults({ ...data });
			console.log(`results: ${results}`); //debugging
		} catch (err) {
			console.error(err);
		}
	};

	// load COVID data on page load
	useEffect(() => {
		getData();
	}, []);

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await fetch(
	// 				`https://api.covidactnow.org/v2/state/NJ.json?apiKey=13dc5eb460e54e28b9d950d83a05290f`
	// 			);
	// 			const data = await response.json();
	//
	// 			console.log(`data: ${data}`); // debugging
	//
	// 			setResults(data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// }, []);

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
						<td>test</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
