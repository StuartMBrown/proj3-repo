d3.json('/view2/output.json').then(data => {
    if (!data) {
        console.error("Error loading data");
        return;
    }

    var speciesImageElement = d3.select("#speciesImage");
    var pieChart; // Assuming you have a variable to store the pie chart

    // Add the JSON data to dropdown menu.
    var menu = d3.select("#selDataset");
    data.forEach(sample => {
        menu.append("option").text(sample).property("value", sample);
    });

    // Initial update for all plots and metadata
    updatePlotsAndMetadata(data[0].name);
    updateDescription(data[0].description);
    updatePieChart(data[0]);  
    updateSpeciesImage(data[0].image_url);

    // Update all plots and metadata when you change the dropdown selection.
    menu.on("change", function () {
        var thisSample = this.value;
        var selectedSample = data.find(sample => sample.name === thisSample);

        if (selectedSample) {
            updatePlotsAndMetadata(selectedSample.name);
            updateDescription(selectedSample.description);
            updatePieChart(selectedSample);
            updateSpeciesImage(selectedSample.image_url);
        } else {
            console.error("Selected sample not found in data");
        }
    });

    function updateDescription(description) {
        var descriptionElement = d3.select("#description");
        descriptionElement.text(description);
    }

    // Function to update the species image
    function updateSpeciesImage(imageUrl) {
        // Update the src attribute of the image element
        speciesImageElement.attr("src", imageUrl);
    }

    // Function to update the pie chart based on the selected sample
    function updatePieChart(sample) {
        var pieData = [{
            values: [117, 81, 13],
            labels: ['Threatened', 'Extinct', 'Experimental/Other'],
            type: 'pie'
        }];

        var layout = {
            height: 400,
            width: 500
        };

        // If the pie chart has been initialized, use Plotly.react to update it
        if (pieChart) {
            Plotly.react('myDiv', pieData, layout);
        } else {
            // If it hasn't been initialized, use Plotly.newPlot
            pieChart = Plotly.newPlot('myDiv', pieData, layout);
        }
    }
});
