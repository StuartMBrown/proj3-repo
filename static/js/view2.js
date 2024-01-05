// guage plot 
// Enter your data for each category (in percentage or count)
var endangeredPercentage = 35;
var threatenedPercentage = 35;
var experimentalPercentage = 35;

// Path: create a triangle shape for the gauge plot
var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
    pathX = String(0),
    space = ' ',
    pathY = String(0),
    pathEnd = ' Z';
var path = mainPath.concat(pathX, space, pathY, pathEnd);

var layout = {
  shapes: [{
    type: 'path',
    path: path,
    fillcolor: '850000',
    line: {
      color: '850000'
    }
  }],
  title: '<b>Gauge</b> <br> Status',
  height: 500,
  width: 500,
  xaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1, 1] },
  yaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1, 1] }
};

function updateDashboard() {
  var selectedState = document.getElementById("greatLakeStates").value;
  var selectedCategory = document.getElementById("speciesCategories").value;

  var imageSource = getImageSource(selectedState, selectedCategory);
  var animalName = getAnimalName(selectedState, selectedCategory);

  document.getElementById("imageContainer").innerHTML = `<img src="${imageSource}" alt="${animalName}">`;

  updateGaugePlot(selectedState, selectedCategory);

  document.getElementById("animalNameContainer").innerHTML = `<p>${animalName}</p>`;

  document.getElementById("dashboardBody").style.backgroundColor = "#cdeccd";
}

function updateGaugePlot(state, category) {
  endangeredPercentage = getUpdatedPercentage(state, category, 'Endangered');
  threatenedPercentage = getUpdatedPercentage(state, category, 'Threatened');
  experimentalPercentage = getUpdatedPercentage(state, category, 'Experimental Population');

  var updatedData = [
    {
      type: 'scatter',
      x: [0], y: [0],
      marker: { size: 28, color: '850000' },
      showlegend: false,
      name: 'speed',
      text: 'Gauge',
      hoverinfo: 'text+name'
    },
    {
      values: [endangeredPercentage, threatenedPercentage, experimentalPercentage, 100 - (endangeredPercentage + threatenedPercentage + experimentalPercentage)],
      rotation: 90,
      text: ['Endangered', 'Threatened', 'Experimental Population', ''],
      textinfo: 'text',
      textposition: 'inside',
      marker: {
        colors: ['rgba(255, 0, 0, .5)', 'rgba(255, 165, 0, .5)', 'rgba(0, 128, 0, .5)', 'rgba(255, 255, 255, 0)']
      },
      labels: ['Endangered', 'Threatened', 'Experimental Population', ''],
      hoverinfo: 'label',
      hole: 0.5,
      type: 'pie',
      showlegend: false
    }
  ];

  Plotly.react('gaugeContainer', updatedData, layout, { showSendToCloud: true });
}

function getUpdatedPercentage(state, category, species) {
  // Replace this with your logic to get the updated percentage based on state, category, and species
  // Example: return updatedPercentage;
  return 35;  // Replace with actual logic
}

function getImageSource(state, category) {
  // Replace this with your logic to get the image source based on state and category
  // Example: return `images/${state}_${category}.jpg`;
  return "IMAGE_SOURCE";  // Replace with actual logic
}

function getAnimalName(state, category) {
  // Replace this with your logic to get the animal name based on state and category
  // Example: return `${state} ${category} Animal`;
  return "Animal Name";  // Replace with actual logic
}


// Testing things - kelsey 

// In python file I will total the number of estinct, threatened and other 
//Potential pie chart? 
var data = [{
    values: [19, 26, 55],
    labels: ['Threatened', 'Extinct', 'Experimental/Other'],
    type: 'pie'
   }];

   var layout = {
    height: 400,
    width: 500
   };

   Plotly.newPlot('myDiv', data, layout);
   