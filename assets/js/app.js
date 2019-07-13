var map;

function initMap() {

  map = new google.maps.Map(
    document.getElementById('map'),
    { center: new google.maps.LatLng(39.952583, -75.165222), zoom: 10 });

  $(document).on("click", ".add-to-map-btn", function() {
    var lat = parseFloat($(this).attr("data-lat"));
    var lng = parseFloat($(this).attr("data-lng"));
    console.log(lat);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      icon: "https://www.google.com/mapfiles/arrow.png",
      map: map
    });
    console.log("hi");
  })

}

$("#search-btn").on("click", function(event) {
  event.preventDefault();
  $("#search-results").empty();
  var searchTerm = $("#search-box").val().trim();
  console.log(searchTerm);

  $.ajax({
    url: "https://api.foursquare.com/v2/venues/search?client_id=2WOZVF2YN3B42HG13D21JEOHUSK5PMAV2JTSWOXHDRUK1GGW&client_secret=HSO1YHS2JPH1HAKU31TIAPIWPDD21CHKUUEEGT2RUYOFESYY&ll=39.952583,-75.165222&query=" + searchTerm + "&categoryId=4deefb944765f83613cdba6e&v=20190713",
    method: "GET"
  }).then(function (response) {
    var venues = response.response.venues
    console.log(venues);
    console.log(venues[0].name);
    for (var i = 0; i < venues.length; i++) {
      //console.log(venue.location.formattedAddress[0]);
      var newRow = $("<div>").addClass("row");
      var newCol = $("<div>").addClass("col");
      var flexDiv = $("<div>").addClass("d-flex");
      var br = $("<br>");
      var hr = $("<hr>")
      var venueName = $("<h5>").text(venues[i].name);
      var venueAddress = venues[i].location.formattedAddress[0];
      var venueCity = venues[i].location.formattedAddress[1];
      var addBtn = $("<button>").addClass("btn btn-sm mr-2 btn-info add-to-map-btn").text("Add to Map");
      addBtn.attr("data-lng", venues[i].location.lng)
      addBtn.attr("data-lat", venues[i].location.lat)
      flexDiv.append(addBtn, venueName)
      newCol.append(hr, flexDiv, br, venueAddress, br, venueCity);
      newRow.append(newCol);
      $("#search-results").append(newRow);
    }
  })
})
