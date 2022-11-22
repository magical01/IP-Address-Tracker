export function setTileLayer(map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/magical01/IP-Address-Tracker" >magical01</a>.'
  }).addTo(map);
}
