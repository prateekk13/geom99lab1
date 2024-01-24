function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 44.343809, lng: -78.740462 },
  });

  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const selectedMode = document.getElementById("mode").value;

  directionsService
    .route({
      origin: { lat:44.343809, lng: -78.740462 },
      destination: { lat: 44.341307, lng: -78.741153 },
            waypoints: [ 
        { location:new google.maps.LatLng( 44.3492254, -78.7554601) }
        { location:new google.maps.LatLng( 44.3593604, -78.741343) }
        { location:new google.maps.LatLng( 44.3588230, -78.7344795) }
],
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode],
    });

window.initMap = initMap;
