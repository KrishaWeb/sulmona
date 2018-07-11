<!DOCTYPE html>
<html lang="en">
<head>
	<?php include('include/styles.php'); ?>
</head>
<body>
	<?php include('include/header.php'); ?>

	<div class="error-page">
		<div class="container text-center">
			<h2>404</h2>
			<h4>Whoops... Page Not Found !!!</h4>
			<div class="view-menu-btn">
				<a href="#">Go Home</a>
			</div>
		</div>
	</div>

	<?php include('include/footer.php'); ?>
	<?php include('include/scripts.php'); ?>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9d3jaUX6Qdr0Uzvq6fQXVmZ1PBuHEVAQ&sensor=false"></script>
	<script>
		google_api_map_init_2088765916();

		function google_api_map_init_2088765916() {
			var map;
			var coordData = new google.maps.LatLng( parseFloat( 42.3622268 ), parseFloat( -71.0962446 ) );
			var marker;

			function initialize() {
				var mapOptions = {
					center: coordData,
					scrollwheel: false,
					zoom: 12,
					styles: [ { "elementType": "geometry", "stylers": [ { "color": "#f5f5f5" } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f5f5" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#dadada" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "color": "#e5e5e5" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#c9c9c9" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] } ]
				}
				var map = new google.maps.Map( document.getElementById( "map-canvas" ), mapOptions );
				marker = new google.maps.Marker( {
					map: map,
					draggable: false,
					position: coordData,
					icon: "images/map-marker.png"
				} );
			}
			google.maps.event.addDomListener( window, "load", initialize );
		}
	</script>
</body>
</html>