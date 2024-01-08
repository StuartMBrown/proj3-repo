// Creating the map object
let myMap = L.map("map", {
  center: [41.65902, -83.40088],
  zoom: 5.45
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let geoData = "/api/v1.0/boundaries";

// Get the data with d3.
d3.json(geoData).then(function (data) {

  // Create a new choropleth layer.
  let threatened = L.choropleth(data, {
      // Define which property in the features to use.
      valueProperty: "THREATENED",
      // Set the color scale.
      scale: ["#ffffb2", "#b10026"],
      // The number of breaks in the step range
      steps: 10,
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
          // Border color
          color: "#fff",
          weight: 1,
          fillOpacity: 0.8
      },
      // Binding a popup to each layer
      onEachFeature: function (feature, layer) {
          // Bind popup with the species count
          layer.bindPopup("<strong>" + feature.properties.ABBR + "</strong><br /><br />Total number of species in this category: " + feature.properties.THREATENED);
      }
  });

  // Create a new choropleth layer.
  let endangered = L.choropleth(data, {
      // Define which property in the features to use.
      valueProperty: "ENDANGERED",
      // Set the color scale.
      scale: ["#ffffb2", "#b10026"],
      // The number of breaks in the step range
      steps: 10,
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
          // Border color
          color: "#fff",
          weight: 1,
          fillOpacity: 0.8
      },
      // Binding a popup to each layer
      onEachFeature: function (feature, layer) {
          // Bind popup with the species count
          layer.bindPopup("<strong>" + feature.properties.ABBR + "</strong><br /><br />Total number of species in this category: " + feature.properties.ENDANGERED);
      }
  });

  // Create a new choropleth layer.
  let nonessential = L.choropleth(data, {
      // Define which property in the features to use.
      valueProperty: "NONESSENTIAL",
      // Set the color scale.
      scale: ["#ffffb2", "#b10026"],
      // The number of breaks in the step range
      steps: 10,
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
          // Border color
          color: "#fff",
          weight: 1,
          fillOpacity: 0.8
      },
      // Binding a popup to each layer
      onEachFeature: function (feature, layer) {
          // Bind popup with the species count
          layer.bindPopup("<strong>" + feature.properties.ABBR + "</strong><br /><br />Total number of species in this category: " + feature.properties.NONESSENTIAL);
      }
  });

  // Set up the legend for the 'threatened' layer.
  let threatenedLegend = L.control({ position: "bottomright" });
  threatenedLegend.onAdd = function () {
      let div = L.DomUtil.create("div", "info legend");
      let limits = threatened.options.limits;
      let colors = threatened.options.colors;
      let labels = [];

      let legendInfo = "<h1>Threatened Legend</h1>" +
          "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
          "</div>";

      div.innerHTML = legendInfo;

      limits.forEach(function (limit, index) {
          labels.push("<li style=\"background-color: " + colors[index] + "\">" + limit + "</li>");
      });

      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
  };

  // Set up the legend for the 'endangered' layer.
  let endangeredLegend = L.control({ position: "bottomright" });
  endangeredLegend.onAdd = function () {
      let div = L.DomUtil.create("div", "info legend");
      let limits = endangered.options.limits;
      let colors = endangered.options.colors;
      let labels = [];

      let legendInfo = "<h1>Endangered Legend</h1>" +
          "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
          "</div>";

      div.innerHTML = legendInfo;

      limits.forEach(function (limit, index) {
          labels.push("<li style=\"background-color: " + colors[index] + "\">" + limit + "</li>");
      });

      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
  };

  // Set up the legend for the 'nonessential' layer.
  let nonessentialLegend = L.control({ position: "bottomright" });
  nonessentialLegend.onAdd = function () {
      let div = L.DomUtil.create("div", "info legend");
      let limits = nonessential.options.limits;
      let colors = nonessential.options.colors;
      let labels = [];

      let legendInfo = "<h1>Nonessential Legend</h1>" +
          "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
          "</div>";

      div.innerHTML = legendInfo;

      limits.forEach(function (limit, index) {
          labels.push("<li style=\"background-color: " + colors[index] + "\">" + limit + "</li>");
      });

      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
  };

  // Adding the 'threatened' layer to the map
  threatened.addTo(myMap);

  // Adding the 'endangered' layer to the map
  endangered.addTo(myMap);

  // Adding the 'nonessential' layer to the map
  nonessential.addTo(myMap);

  // Create a control layer with base map and overlay layers
  let baseMaps = {
      "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
  };

  let overlayMaps = {
      "Threatened": threatened,
      "Endangered": endangered,
      "Nonessential": nonessential
  };

  // Adding the layer control to the map
  L.control.layers(baseMaps, overlayMaps, { position: 'topright' }).addTo(myMap);

});
