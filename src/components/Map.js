import React, { useState, useEffect, useCallback } from 'react';
import {
	GoogleMap,
	Marker,
	Autocomplete,
	useJsApiLoader,
	InfoWindow
} from '@react-google-maps/api';

//this needs to be outside or else it wont render...
const containerStyle = {
	width: '800px',
	height: '800px'
};

let coords = [];
let google = window.google;
export default function Doc(props) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyDgAfPKf6nbpB3IEAxPweU-5xiqnCdNS98&callback=initMap&libraries=places&v=weekly&channel=2',
		libraries: 'places'
	});

	const [map, setMap] = useState({
		center: { lat: -33.867, lng: 151.195 },
		coordsResult: [],
		name: '',
		address: ''
	});
	const [currentPosition, setCurrentPosition] = useState({ lat: '', lng: '' });

	const success = position => {
		const currentPosition = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};
		setCurrentPosition(currentPosition);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success);
	}, []);

	//this is checking around me despite the center being my apt.
	const onMapLoad = map => {
		let request = {
			query: 'hospital',
			fields: ['name', 'geometry']
		};

		let service = new google.maps.places.PlacesService(map);

		service.findPlaceFromQuery(request, (results, status) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				for (var i = 0; i < results.length; i++) {
					coords.push(results[i]);
				}

				setMap({
					center: results[0].geometry.location,
					coordsResult: coords,
					name: results[0].name
				});
			}
		});
	};

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	const places = map.coordsResult.map((results, index) => {
		return (
			<Marker
				key={results.name}
				animation="BOUNCE"
				position={results.geometry.location}
				icon={icon}
				clickable={true}
				onClick={() => alert(results.name)}
			/>
		);
	});

	return (
		<>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={currentPosition}
					zoom={13}
					onLoad={onMapLoad}
					onUnmount={onUnmount}
				>
					<Marker position={currentPosition} animation="BOUNCE" />
					{places}
				</GoogleMap>
			) : (
				<></>
			)}
		</>
	);
}
