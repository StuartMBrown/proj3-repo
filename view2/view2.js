// Example function to open the pop-up with data
function openPopup(data) {
    document.getElementById('popupGaugePlot').innerHTML = data.gaugePlot;
    document.getElementById('popupLocation').innerHTML = 'Listing Location: ' + data.location;
    document.getElementById('popupSpeciesImage').src = data.image;
    document.getElementById('popupSpeciesDescription').innerHTML = data.description;
    document.getElementById('popup').style.display = 'block';
}

// Example function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Example function to fetch data and open the pop-up
function fetchData() {
    // Perform your data fetching here (replace this with actual data)
    const data = {https://ecos.fws.gov/ecp/report/species-listings-by-state
        gaugePlot: '...gauge plot data...',
        location: '...listing location...',
        image: '...image URL...',
        description: '...species description...',
    };

    openPopup(data);
}

// Example function to populate species dropdown dynamically
function populateSpeciesDropdown() {
    const speciesDropdown = document.getElementById('speciesDropdown');

    // Replace with the actual URL where your species data is available
    const speciesEndpoint = 'https://ecos.fws.gov/ecp/report/species-listings-by-state';

    fetch(speciesEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the species data is an array of objects with a "name" property
            data.forEach(species => {
                const option = document.createElement('option');
                option.value = species.name;  // Adjust based on the actual structure of your data
                option.textContent = species.name;  // Adjust based on the actual structure of your data
                speciesDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching species data:', error);
        });
}

// Call the function to populate the species dropdown when the page loads
window.onload = function() {
    populateSpeciesDropdown();
};

// Other functions (fetchData, openPopup, closePopup) remain the same...

