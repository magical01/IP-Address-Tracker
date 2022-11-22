import vars from "../_vars";
import L from 'leaflet';
import {validateIp} from './validation-ip';
import {setTileLayer} from './tile-layer.js';
import {setOffset} from './offset.js';

vars.searchBtn.addEventListener('click', getData);
vars.inputIp.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
  iconUrl: 'img/icon-location.svg',
  iconSize: [33, 44],

});

const map = L.map(vars.mapEl, {
  center: [49.302, -0.07],
  zoom: 12,
  zoomControl: false,
});

setTileLayer(map);

L.marker([49.302, -0.07], {icon: markerIcon}).addTo(map);

function getData() {
  if (validateIp(vars.inputIp.value)) {
    fetch(`
    https://geo.ipify.org/api/v2/country,city?apiKey=at_IxmA6XU9ddI9mnaqyXLI2gfkxd6lm&ipAddress=${vars.inputIp.value}`)
      .then(response => response.json())
      .then(data => renderInfo(data))
  }
}

function handleKey(e) {
  if (e.key == 'Enter') {
    getData();
  }
}

function renderInfo(data) {
  vars.ipEl.textContent = data.ip;
  vars.locationEl.textContent = `${data.location.country}, ${data.location.region}`;
  vars.timezoneEl.textContent = data.location.timezone;
  vars.ispEl.textContent = data.isp;

  map.setView([data.location.lat, data.location.lng]);
  L.marker([data.location.lat, data.location.lng], {icon: markerIcon}).addTo(map);

  if (matchMedia('(max-width: 1023px)').matches) {
    setOffset(map);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetch(`
  https://geo.ipify.org/api/v2/country,city?apiKey=at_IxmA6XU9ddI9mnaqyXLI2gfkxd6lm&ipAddress=174.27.48.178`)
    .then(response => response.json())
    .then(data => renderInfo(data))
});

