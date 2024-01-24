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
      destination: { lat: 44.34130783, lng: -78.741153 },
            waypoints: [ 
        { location;new google.maps.LatLng( 44.349225413, -78.755460118) }
        { location;new google.maps.LatLng( 44.359360438, -78.74134368) }
        { location;new google.maps.LatLng( 44.358823000, -78.734479531) }
]
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode],
    })

window.initMap = initMap;
