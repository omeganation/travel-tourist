const map = L.map('map').setView([48.8566, 2.3522], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
L.marker([48.8566, 2.3522]).addTo(map).bindPopup('Paris, France').openPopup();
L.marker([3.1390, 101.6869]).addTo(map).bindPopup('Kuala Lumpur, Malaysia').openPopup();

<script>
    // Retrieve the current visitor count from localStorage
    let visitorCount = localStorage.getItem("visitorCount");

    // If no count exists, initialize it to 1 (first visit)
    if (!visitorCount) {
        visitorCount = 1;
    } else {
        // Increment the count for returning visits
        visitorCount = parseInt(visitorCount) + 1;
    }

    // Save the updated count back to localStorage
    localStorage.setItem("visitorCount", visitorCount);

    // Display the visitor count on the page
    document.getElementById("visitorCount").textContent = visitorCount;
</script>
