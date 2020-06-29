const mapboxgl = require("mapbox-gl");

const iconUrls = {
  activity: "url(http://i.imgur.com/WbMOfMl.png)",
  'hotel': 'http://i.imgur.com/D9574Cu.png',
  'restaurant': 'http://i.imgur.com/cqR6pUI.png'
}


const buildMarker = (type, coordinates) => {
  if (!iconUrls.hasOwnProperty(type)) {    type = "activity";  }
  let newElem = document.createElement('div');
  newElem.style.backgroundImage = iconUrls.type;
  newElem.style.width = '32px';
  newElem.style.height = '39px';
  return new mapboxgl.Marker(newElem).setLngLat(coordinates);
}






module.exports = buildMarker;
