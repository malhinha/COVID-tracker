import React, { Fragment } from 'react';

export default function SimpleDateDisplay({ date }) {
	// months array
	const monthsList = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC'
	];

	const year = parseInt(`${date}`.slice(0, 4), 10);
	const month = monthsList[parseInt(`${date}`.slice(5, 7), 10) - 1];
	const day = parseInt(`${date}`.slice(8, 10), 10);
	const shortDate = `${day} ${month} ${year}`;
	// const shortDate = `${month}-${day} `;

	return <>{shortDate}</>;
}
