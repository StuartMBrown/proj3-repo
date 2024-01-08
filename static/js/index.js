const jsonFilePath = '/Users/Jian/proj3-repo/combined_data.json';
// Fetch the JSON data
fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
        // Work with your JSON data here
        console.log('JSON Data:', data);
        // You can do further processing or use the data as needed
    })
    .catch(error => console.error('Error fetching JSON:', error));
// your_data.js
const speciesData = [
    // Add your GeoJSON data for all species here
    // Example: { "type": "Feature", "geometry": { "type": "Point", "coordinates": [longitude, latitude] }, "properties": { "type": "threatened" } }
  ];
  // Count the number of species in each category
  let threatenedSpeciesCount = 0;
  let endangeredSpeciesCount = 0;
  let nonessentialSpeciesCount = 0;
  speciesData.forEach(species => {
    const speciesType = species.properties.type;
    if (speciesType === 'threatened') {
      threatenedSpeciesCount++;
    } else if (speciesType === 'endangered') {
      endangeredSpeciesCount++;
    } else if (speciesType === 'nonessential') {
      nonessentialSpeciesCount++;
    }
  });
  console.log('Threatened Species Count:', threatenedSpeciesCount);
  console.log('Endangered Species Count:', endangeredSpeciesCount);
  console.log('Nonessential Species Count:', nonessentialSpeciesCount);
