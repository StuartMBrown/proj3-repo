d3.json('/static/data/output.json').then(data => {
    if (!data) {
        console.error("Error loading data");
        return;
    }

    var speciesImageElement = d3.select("#speciesImage");
    var pieChart;

    var menu = d3.select("#selDataset");
    data.forEach(sample => {
        menu.append("option").text(sample.name).property("value", sample.name);
    });

    menu.on("change", function () {
        var selectedName = this.value;
        var selectedSample = data.find(sample => sample.name === selectedName);

        if (selectedSample) {
            updatePlotsAndMetadata(selectedSample);
            updateDescription(selectedSample.description);
            updatePieChart(selectedSample);
            updateSpeciesImage(selectedSample.image_url);
        } else {
            console.error("Selected sample not found in data");
        }
    });

    // Initial update for the first item in the dropdown
    updatePlotsAndMetadata(data[0]);
    updateDescription(data[0].description);
    updatePieChart(data[0]);
    updateSpeciesImage(data[0].image_url);

    function updateDescription(description) {
        var descriptionElement = d3.select("#description");
        descriptionElement.text(description);
    }

    function updateSpeciesImage(imageUrl) {
        speciesImageElement.attr("src", imageUrl);
    }

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

        if (pieChart) {
            Plotly.react('myDiv', pieData, layout);
        } else {
            pieChart = Plotly.newPlot('myDiv', pieData, layout);
        }
    }

    function updatePlotsAndMetadata(selectedSample) {
        updatePlots(selectedSample);
        updateMetadata(selectedSample);
    }

    function updatePlots(selectedSample) {
        // Your implementation to update plots based on the data
        console.log("Updating plots with data:", selectedSample);
    }

    function updateMetadata(selectedSample) {
        // Your implementation to update metadata based on the data
        console.log("Updating metadata with data:", selectedSample);
    }

}).catch(error => {
    console.error("Error loading JSON data:", error);
});