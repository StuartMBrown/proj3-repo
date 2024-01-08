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

// create species counters
let mi_species = 0,
wi_species = 0,
il_species = 0,
in_species = 0,
mn_species = 0,
oh_species = 0,
pa_species = 0,
ny_species = 0;

// Get the data with d3.
d3.json(geoData).then(function(data) {

    // Create a new choropleth layer.
    let geojson = L.choropleth(data, {
  
      // Define which property in the features to use.
      valueProperty: "STATE",

      //include drop down change function 
  
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
      
      // Binding a popup to each layer
      onEachFeature: function(feature, layer) {
        let state = feature.properties.state;
        
        //create conditional to count total # of species per state
        if (state === 'MI') {
          mi_species++;
        } else if (state === 'WI') {
          wi_species++;
        } else if (state === 'IL') {
          il_species++;
        } else if (state === 'IN') {
          in_species++;
        } else if (state === 'MN') {
          mn_species++;
        } else if (state === 'OH') {
          oh_species++;
        } else if (state === 'PA') {
          pa_species++;
        } else if (state === 'NY') {
          ny_species++;
        }

        console.log(mi_species);
        console.log(wi_species);
        console.log(il_species);
        console.log(in_species);
        console.log(mn_species);
        console.log(oh_species);
        console.log(pa_species);
        console.log(ny_species);
      

        // Bind popup with the species count
        layer.bindPopup("<strong>" + state + "</strong><br /><br />Total number of species in this category: " + getSpeciesCount(state));
      }
    }).addTo(myMap);

    // Function to get species count for a given state
    function getSpeciesCount(state) {
      switch (state) {
        case 'MI':
          return mi_species;
        case 'WI':
          return wi_species;
        case 'IL':
          return il_species;
        case 'IN':
          return in_species;
        case 'MN':
          return mn_species;
        case 'OH':
          return oh_species;
        case 'PA':
          return pa_species;
        case 'NY':
          return ny_species;
        default:
          return 0;
      }
    }
  
    // Set up the legend.
    let legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
      let div = L.DomUtil.create("div", "info legend");
      let limits = geojson.options.limits;
      let colors = geojson.options.colors;
      let labels = [];
  
      // Add the minimum and maximum.
      let legendInfo = "<h1>Population with Children<br />(ages 6-17)</h1>" +
        "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        "</div>";
  
      div.innerHTML = legendInfo;
  
      limits.forEach(function(limit, index) {
        labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
      });
  
      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
    };
  
    // Adding the legend to the map
    legend.addTo(myMap);
  
  });
  