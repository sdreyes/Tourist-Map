var map;

function initMap() {

  map = new google.maps.Map(
    document.getElementById('map'),
    { center: new google.maps.LatLng(39.952583, -75.165222), zoom: 16 });

  var features = [
    {
      position: new google.maps.LatLng(39.952583, -75.165222),
    }, {
      position: new google.maps.LatLng(39.952583, -75.165222),
    }, {
      position: new google.maps.LatLng(39.952583, -75.165222),
    }
  ];

  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: "https://www.google.com/mapfiles/arrow.png",
      map: map
    });
  };

  $(document).on("click", "body", function() {
    // var marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(-33.914139, 151.240704),
    //   icon: icons["test"].icon,
    //   map: map
    // });
    // console.log("hi");
  })

}

$.ajax({
  url: "https://api.foursquare.com/v2/venues/search?client_id=2WOZVF2YN3B42HG13D21JEOHUSK5PMAV2JTSWOXHDRUK1GGW&client_secret=HSO1YHS2JPH1HAKU31TIAPIWPDD21CHKUUEEGT2RUYOFESYY&ll=39.952583,-75.165222&categoriId=4deefb944765f83613cdba6e&v=20190713",
  method: "GET"
}).then(function (response) {
  console.log(response.response.venues);
})