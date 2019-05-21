var map

function createMap() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoibm92YWJsYWRlIiwiYSI6ImNqbzdubXBwMjB2bmszcG9iNnV1YWl3dG4ifQ.PS1GDEGCO_LqjRGcIkyfIw'
  map = new mapboxgl.Map({
  container: "map",
  center: getCoordinates(),
  zoom: 13,
  style: 'mapbox://styles/mapbox/satellite-v9'
  });
}


function getCoordinates() {
  ajaxGetRequest("/iss-location", coordinates)
}

function coordinates(data) {
  return JSON.parse(data);
}


function ajaxGetRequest(path, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      callback(this.response);
    }
  request.open("GET", path);
  request.send();
  }
}
