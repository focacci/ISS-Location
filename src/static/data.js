var map


function createMap() {
  map = new mapboxgl.Map({
  container: 'map',
  center: getCoordinates(),
  zoom: 13,
  style: style_object,
  hash: true
  };
}


function getCoordinates() {
  ajaxGetRequest("/iss-location", updateCoordinates)
}

function updateCoordinates(data) {
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
