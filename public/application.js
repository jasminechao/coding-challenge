$(document).ready(function() {

  function initMap(lat, lng) {
    var uluru = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  $('form').submit(function(e) {
    e.preventDefault();
    var address = $('input').val()
    $.ajax({
      type: "GET",
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyB1afBnbrfwQXMzS2gi4XEm1FbNR5CFudg",
      success: function(data) {
        var lat = data.results[0].geometry.location.lat
        var lng = data.results[0].geometry.location.lng
        initMap(lat, lng);
      },
      error: function(jqXHR) {
        console.error(jqXHR.responseText);
        document.getElementById('invalidAddress').classList.remove('d-none');
        document.getElementById('invalidAddress').classList.add('d-block');
      }
    });
  });

  $.ajax({
    type: "GET",
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=berlin&key=AIzaSyB1afBnbrfwQXMzS2gi4XEm1FbNR5CFudg",
    success: function(data) {
      initMap(52.5200066, 13.404954)
    },
    error: function(jqXHR) {
      console.error(jqXHR.responseText);
    }
  })
});
