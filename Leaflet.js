const map = L.map('map').setView([48.8566, 2.3522], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
L.marker([48.8566, 2.3522]).addTo(map).bindPopup('Paris, France').openPopup();
L.marker([3.1390, 101.6869]).addTo(map).bindPopup('Kuala Lumpur, Malaysia').openPopup();
