// Store our API endpoint as queryUrl.
let queryUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson';

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});

// Functions to declare: 
// Function to get color based on depth
let colorScale = d3.scaleLinear()
    .domain([0, 10, 30, 50, 70, 90])
    .range(['#00FF00', 'greenyellow', '#FFFF00', '#FFA500', '#FF4500', '#FF0000']);

function getColor(depth) {
    return colorScale(depth);
}

// A function to determine the marker size based on the magnitude.
function markerSize(magnitude) {
    return magnitude * 10000;
}

// A function to add a color legend based on depth.
function addLegend(map) {
    let legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend'),
            colors = ['#00FF00', '#9ACD32', '#FFFF00', '#FFA500', '#FF4500', '#FF0000'],
            depths = [0, 10, 30, 50, 70, 90],
            labels = [];

        div.innerHTML = '<h1>Earthquake Depth<br />(km)</h1>';

        // loop through our density intervals and generate a label with a colored square for each interval
        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(parseFloat(depths[i])) + '"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        }


        return div;
    };

    legend.addTo(map);
}

function createFeatures(earthquakeData) {

    // Define a function that we want to run once for each feature in the features array.

    // Define arrays to hold the created earthquake markers.
    let quakeMarkers = [];

    // Loop through earthquake data and create circle markers.
    for (let i = 0; i < earthquakeData.length; i++) {
        // Calculate the radius based on earthquake magnitude.
        var radius = markerSize(earthquakeData[i].properties.mag);
    
        // Calculate the color based on earthquake depth.
        var depthColor = getColor(earthquakeData[i].geometry.coordinates[2]);
    
        // Create a circle marker with the calculated radius.
        quakeMarkers.push(
            L.circle([earthquakeData[i].geometry.coordinates[1], earthquakeData[i].geometry.coordinates[0]], {
                stroke: true,
                weight: 0.25,
                fillOpacity: 0.50,
                color: 'black',
                fillColor: depthColor,
                radius: radius 
            }).bindTooltip(`<h3>Magnitude: ${earthquakeData[i].properties.mag}</h3><h3>Depth: ${earthquakeData[i].geometry.coordinates[2]} km</h3><hr><p>${new Date(earthquakeData[i].properties.time)}</p>`, {sticky: true})
        );
    }
    
    
    // Create a GeoJSON layer that contains the earthquake markers.
    let earthquakes = L.layerGroup(quakeMarkers);

    // Send our earthquakes layer to the createMap function.
    createMap(earthquakes);
}

function createMap(earthquakes) {

    // Create the base layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // Create a baseMaps object.
    let baseMaps = {
        'Street Map': street,
        'Topographic Map': topo
    };

    // Create an overlay object to hold our earthquake markers.
    let overlayMaps = {
        Earthquakes: earthquakes
    };

    // Create our map, giving it the streetmap and earthquake layers to display on load.
    let myMap = L.map('map', {
        center: [37.09, -95.71],
        zoom: 3,
        layers: [street, earthquakes],
    });

    // Add legend.
    addLegend(myMap);

    // Create a layer control.
    // Pass it our baseMaps and overlayMaps.
    // Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

}
