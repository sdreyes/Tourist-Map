var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.95233, lng: -75.16379 },
    zoom: 13
  });
}