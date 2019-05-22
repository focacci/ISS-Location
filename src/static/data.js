function init() {
  ajaxGetRequest("issLocation", loadMap);
}


function loadMap(location) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoibm92YWJsYWRlIiwiYSI6ImNqbzdubXBwMjB2bmszcG9iNnV1YWl3dG4ifQ.PS1GDEGCO_LqjRGcIkyfIw';

  const center = JSON.parse(location);

  console.log(center);
  var map = new mapboxgl.Map({
    container: "map",
    center: center,
    zoom: 2,
    style: 'mapbox://styles/mapbox/satellite-v9'
  });
  var marker = new mapboxgl.Marker()
  marker.setLngLat(center).addTo(map);
}



function ajaxGetRequest(path, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      callback(this.response);
    }
  };
  request.open("GET", path);
  request.send();
}


function test() {
  console.log("Js received");
}
