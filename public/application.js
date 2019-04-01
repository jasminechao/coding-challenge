$(document).ready(function() {

  function initMap(lat, lng) {
    let uluru = {lat: lat, lng: lng};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  $('form').submit(function(e) {
    e.preventDefault();
    let address = $('input').val()
    $.ajax({
      type: "GET",
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyB1afBnbrfwQXMzS2gi4XEm1FbNR5CFudg",
      success: function(data) {
        let lat = data.results[0].geometry.location.lat
        let lng = data.results[0].geometry.location.lng
        let address = data.results[0].formatted_address
        initMap(lat, lng);
        document.getElementById('searchAddress').innerText = address;
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
