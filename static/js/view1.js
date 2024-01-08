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

  // Function to get color based on depth
  let colorScale = d3.scaleLinear()
    .domain([0, 5, 10, 15, 20, 25])
    .range(
      ['#E9CCEE', '#E1AADD', '#D488C0', '#C6669A', '#B8446D', '#A92239']
    );

  function getColor(value) {
    return colorScale(value);
  }

  // Create a new choropleth layer.
  let threatened = L.choropleth(data, {
      // Define which property in the features to use.
      valueProperty: "THREATENED",
      // Set the color scale.
      scale: ['#E9CCEE', '#E1AADD', '#D488C0', '#C6669A', '#B8446D', '#A92239'],
      // The number of breaks in the step range
      steps: 5,
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
          color: '#fff',
          weight: 2,
          fillOpacity: 0.5
      },
      // Binding a popup to each layer
      onEachFeature: function (feature, layer) {
          // Bind popup with the species count
          layer.bindPopup("<strong>" + feature.properties.ABBR + "</strong><br /><br />Total number of species in this category: " + feature.properties.THREATENED);
      }
  });

  // Set up the legend for the 'threatened' layer.
  let threatenedLegend = L.control({ position: "bottomright" });
  threatenedLegend.onAdd = function () {
      let div = L.DomUtil.create("div", "info legend");
      let bins = [0, 5, 10, 15, 20, 25];
      let labels = [];
  
      for (let i = 0; i < bins.length; i++) {
          let legendInfo = '<i style="background:' + getColor(bins[i]) + 
              '"></i> ' +
              bins[i] + (bins[i + 1] ? '&ndash;' + bins[i + 1] + '<br>' : '+');
  
          labels.push(legendInfo);
      }
  
      div.innerHTML = labels.join("");
      return div;
  };
  

  // Create a new choropleth layer.
  let endangered = L.choropleth(data, {
      // Define which property in the features to use.
      valueProperty: "ENDANGERED",
      // Set the color scale.
      scale: ['#E9CCEE', '#E1AADD', '#D488C0', '#C6669A', '#B8446D', '#A92239'],
      // The number of breaks in the step range
      steps: 5,
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
          color: '#fff',
          weight: 2,
          fillOpacity: 0.5
      },
      // Binding a popup to each layer
      onEachFeature: function (feature, layer) {
          // Bind popup with the species count
          layer.bindPopup("<strong>" + feature.properties.ABBR + "</strong><br /><br />Total number of species in this category: " + feature.properties.ENDANGERED);
      }
  });

  // Set up the legend for the 'endangered' layer.
  let endangeredLegend = L.control({ position: "bottomright" });
  endangeredLegend.onAdd = function () {
      let div = L.DomUtil.create("div", "info legend");
      let bins = [0, 5, 10, 15, 20, 25];
      let labels = [];

      for (let i = 0; i < bins.length; i++) {
        let legendInfo = '<i style="background:' + getColor(parseFloat(bins[i])) + 
          '"></i> ' +
          bins[i] + (bins[i + 1] ? '&ndash;' + bins[i + 1] + '<br>' : '+');

        labels.push(legendInfo);
    }

    div.innerHTML = labels.join("");
    return div;
  };

  // Create a new choropleth layer.
  let nonessential = L.choropleth(data, {
      // Define which property in the features to use.
      valueProperty: "NONESSENTIAL",
      // Set the color scale.
      scale: ['#E9CCEE', '#E1AADD', '#D488C0', '#C6669A', '#B8446D', '#A92239'],
      // The number of breaks in the step range
      steps: 5,
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
          color: '#fff',
          weight: 2,
          fillOpacity: 0.5
      },

      // Binding a popup to each layer
      onEachFeature: function (feature, layer) {
          // Bind popup with the species count
          layer.bindPopup("<strong>" + feature.properties.ABBR + "</strong><br /><br />Total number of species in this category: " + feature.properties.NONESSENTIAL);
      }
  });

  // Set up the legend for the 'nonessential' layer.
  let nonessentialLegend = L.control({ position: "bottomright" });
  nonessentialLegend.onAdd = function () {
      let div = L.DomUtil.create("div", "info legend");
      let bins = [0, 5, 10, 15, 20, 25];
      let labels = [];

      for (let i = 0; i < bins.length; i++) {
        let legendInfo = '<i style="background:' + getColor(parseFloat(bins[i])) +    
          '"></i> ' +
          bins[i] + (bins[i + 1] ? '&ndash;' + bins[i + 1] + '<br>' : '+');

        labels.push(legendInfo);
    }

    div.innerHTML = labels.join("");
    return div;
  };

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

  // Adding the 'threatened' layer to the map
  threatened.addTo(myMap);

  // Adding the 'threatened' legend to the map
  threatenedLegend.addTo(myMap);

  // Adding the 'endangered' layer to the map
  endangered.addTo(myMap);

  // Adding the 'endangered' legend to the map
  endangeredLegend.addTo(myMap);

  // Adding the 'nonessential' layer to the map
  nonessential.addTo(myMap);

  // Adding the 'nonessential' legend to the map
  nonessentialLegend.addTo(myMap);

  // Event listener for controlling legends based on layer selection
  myMap.on('overlayremove', function (eventLayer) {
    if (eventLayer.name === 'Threatened') {
      myMap.removeControl(threatenedLegend);
    } else if (eventLayer.name === 'Endangered') {
      myMap.removeControl(endangeredLegend);
    } else if (eventLayer.name === 'Nonessential') {
      myMap.removeControl(nonessentialLegend);
    }
  });

  myMap.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === 'Threatened') {
      threatenedLegend.addTo(myMap);
    } else if (eventLayer.name === 'Endangered') {
      endangeredLegend.addTo(myMap);
    } else if (eventLayer.name === 'Nonessential') {
      nonessentialLegend.addTo(myMap);
    }
  });

  // Removing the layers from the map to keep them turned off by default
  myMap.removeLayer(threatened);
  myMap.removeLayer(endangered);
  myMap.removeLayer(nonessential);

});
