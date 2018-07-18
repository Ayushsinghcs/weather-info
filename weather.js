function weather() {
  var location = document.getElementById("location");
  var apiKey = "96857879e743500906e0a4ed6edb506d";
  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
   +latlon+"&zoom=14&size=800x350&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
   document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";

    location.innerHTML =
      "Latitude is " + latitude + "°";
    location1.innerHTML =  " Longitude is " + longitude + "°";

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
      function(data) {
   var F = data.currently.temperature;
   var C = (F-32)*5/9;


    $("#temp").html(C + "° C");

  });


  }

  function error() {
    location.innerHTML = "location not found";
  }

}

weather();
