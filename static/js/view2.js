d3.json('/view2/great_lakes_data.csv').then(function(data) {
    //url
    var url = data[1].url;
    // name
    var name = data[1].name;
    // state
    var state = data[1].state;
    // image url
    var image_url = data[1].image_url;
    // endangered
    var endangered = data[1].endangered;
    // threatened
    var threatened = data[1].threatened;
    // description
    var description = data[1].description;

    // *****Drop Down*******
    for (let i = 0; i < name.length; i++) {
        let options = d3.select("#selDataset")
        options.append("option").text(name[i]).attr("value", name[i]);
    }

    // *****Description INFO*******
    var para = d3.select("#Description");
    para.text(description);

    // pie chart
    var pieData = [{
        values: [117, 81, 13],
        labels: ['Threatened', 'Extinct', 'Experimental/Other'],
        type: 'pie'
    }];

    var layout = {
        height: 400,
        width: 500
    };

    Plotly.newPlot('myDiv', pieData, layout);
});
