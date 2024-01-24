function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 29.3909, lng: 76.9635 },
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = "123456";

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      label: labels[i % labels.length],
      title: location.title,
    });
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

const locations = [
    { lat: 29.3909, lng: 76.9635, title: "Location 1" },
    { lat: 16.5004, lng: 151.7415, title: "Bora" },
    { lat: 28.3949, lng: 84.1240, title: "Nepal" }, 
    { lat: 28.5983, lng: 83.9310, title: "Himalayas" }, 
    { lat: 36.0001, lng: 76.0000, title: "Karakoram" }, 
    { lat: 36.8922, lng: 73.2633°, title: "Hindu Kush" }, 
    { lat: 39.0000, lng: 72.0000, title: "pamirs" }, 
    { lat: 27.5000, lng: 99.0000, title: "Hengduan Mountains" }, 
    { lat: 42.0000, lng: 80.0000, title: "Tian Shan" }, 
    { lat: 36.0000, lng: 84.0000, title: "Kunlun" }, 
    { lat: 28.5983, lng: 83.9310, title: "Transhimalaya" }, 
    { lat: 21.1608, lng: 66.7752, title: "Andes" }, 
    { lat: 36.3286, lng: 72.9987, title: "Hindu Raj" }, 
    { lat: 63.0694, lng: 151.0072, title: "Alaska Range" }, 
    { lat: 60.5000, lng: 139.5000, title: "Saint Elias Mountains" }, 
    { lat: 42.6366, lng: 44.1576, title: "Caucasus Mountains" }, 


  
];
