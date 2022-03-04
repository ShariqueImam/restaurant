import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
	"pk.eyJ1Ijoic2hhcmlxdWVpbWFtIiwiYSI6ImNrdWZwbGFqdTAxenUydnF2ZmV5ajNucnUifQ.IM8x2CW78_evFLGnjh8twQ";

const Location = () => {
	const width = window.innerWidth;
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(69.3451);
	const [lat, setLat] = useState(30.3753);
	const [zoom, setZoom] = useState(5);
	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
	});
	useEffect(() => {
		new mapboxgl.Marker({
			color: "black",
			rotation: 0,
			draggable: false,
			scale: 0.8,
		})
			.setLngLat([lng, lat])
			.addTo(map.current);
	}, []);

	return (
	
			<div style={{ height: "200px", width: "300px" }} className="flex justify-center items-center">
			<div
				className="border-2 border-red-900 "
					ref={mapContainer}
					style={{
						height: `${
							width > 1000
								? "250px"
								: width > 700 && width < 999
								? "200px"
								: "150px"
						}`,
						width: `${
							width > 1000
								? "300px"
								: width > 700 && width < 999
								? "200px"
								: "250px"
						}`,
					}}
				></div>
			</div>
		
	);
};

export default Location;
