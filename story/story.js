function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 48.4758, lng: -81.3305 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "123456";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
 { lat: 49.758123, lng: -92.65349},
{ lat: 45.442046, lng: -78.820583},
{ lat: 48.17812017, lng: -90.22694426},
{ lat: 45.3915, lng: -79.214},
{ lat: 44.843699, lng: -80.002699},
{ lat: 44.62555, lng: -78.85738},
{ lat: 44.601, lng: -79.4829},
{ lat: 46.944168, lng: -84.551017},
{ lat: 47.352455, lng: -81.997528},
{ lat: 49.904122, lng: -93.469178},
{ lat: 44.8972, lng: -77.2095},
{ lat: 45.65729, lng: -77.57886},
{ lat: 43.40684, lng: -79.76889},
{ lat: 49.068974, lng: -93.904116},
{ lat: 44.50176, lng: -76.04133},
{ lat: 46.217628, lng: -82.070231},
{ lat: 44.53622, lng: -80.34897},
{ lat: 43.8755, lng: -78.777834},
{ lat: 46.18, lng: -77.84},
];
