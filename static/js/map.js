// map.js
const map = L.map('map').setView([37.8, -96], 4); // Set the initial view to the United States
// Add base layer for states
const statesLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
// Add your threatened species heatmap layer
const threatenedHeatLayer = L.heatLayer(threatenedSpeciesData, { radius: 20 }).addTo(map);
// Add your endangered species heatmap layer
const endangeredHeatLayer = L.heatLayer(endangeredSpeciesData, { radius: 20 }).addTo(map);
// Add your nonessential species heatmap layer
const nonessentialHeatLayer = L.heatLayer(nonessentialSpeciesData, { radius: 20 }).addTo(map);
// Create a control layer to toggle different species layers
const overlayMaps = {
  'Threatened Species': threatenedHeatLayer,
  'Endangered Species': endangeredHeatLayer,
  'Nonessential Species': nonessentialHeatLayer
};
L.control.layers({ 'States': statesLayer }, overlayMaps).addTo(map);