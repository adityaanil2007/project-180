let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#burjKhalifa")
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([25.1972,55.2744])
	.addTo(map);



var img2 = document.querySelector("#operaHouse")
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([33.8568,151.2153])
	.addTo(map);



var img3 = document.querySelector("#eiffelTower")
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([48.8584 , 2.2945 ])
	.addTo(map);


var img4 = document.querySelector("#goldenGateBridge")

var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([37.8199 , 122.4786])
	.addTo(map);
