## Project overview - Visualization Track 
Dataset:(https://ecos.fws.gov/ecp/report/species-listings-by-state-totals?statusCategory=Listed)

The Great Lakes Endangered Species Project focuses on raising awareness about the species in the Great Lakes region, specifically in states such as Minnesota, Wisconsin, Illinois, Indiana, Ohio, Michigan, Pennsylvania, and New York. The project employs three main views to convey crucial information. View #1 presents a location chart showcasing the distribution of threatened, endangered, and nonessential species, using different layers to distinguish each category. View #2 offers a dynamic dashboard with dropdown options for selecting a specific state and species (including common names). This view includes a pop-up gauge plot displaying the levels of threatened, endangered, and nonessential species, along with additional information such as the listing location, images, and brief descriptions of the animals. View #3 serves as a comprehensive summary of species distribution in the Great Lakes region. By providing a comprehensive visual representation and interactive features, the project aims to shed light on the current status of these animals and promote awareness for their conservation in the Great Lakes region.

Definitions 
Non-essential: on the basis of the best available information, the experimental population is not essential for the continued existence of the species.
A “threatened species” is one that is likely to become endangered in the foreseeable future throughout all or a significant portion of its range.
An “endangered species” is one that is in danger of extinction throughout all or a significant portion of its range.
An experimental population is a population of an endangered or threatened species that is released into the wild outside of the current range of the species with the aim of contributing to the conservation of the species.

## Details for Team to Refer to (will be deleted later):
Focus on the great lakes endangered species: Minnesota, Wisconsin, Illinois, Indiana, Ohio, Michigan, Pennsylvania (Region 1) and New York (Region 1)

View #1
Location chart of all the threatened, endangered species, nonesstential
Leaflet map - brings up page with summary (Erin will help with GEOJSON - edit out all states not in project)
Heatmap like 
- layer # of threated 
- layer # of endangered
- layer # of nonesstential

View #2
Dashboard (web scrap - create for loop)
- drop down for state
- drop down for species (include common name) 
- pop-up GAUGE PLOT with threatened, endangered, nonesstential
- box pop up with "where listed"
- image
- blurb about animal 

View #3
- Summary of the species distrubution 

## Project Plan Idea (will be deleted later)
- [x] Find data (contains 100+) 
- [x] create one-page proposal (12/18) 
- [x] discuss our charts and evaluate data if it will allow for those charts (12/18) 
- [x] sketch webpage and determine how parts are related (12/18)
- [ ] A database is used to house data (SQL, MongoDB, SQLite, etc.) - (12/19)
- [ ] Merge CSVs and turn into JSON (12/19)
- [ ] clean data and then put it into database (12/19)
- [ ] write queries that will pull data from the db that matches what is needed for the plot and create routes to send data to javascript (12/19)
- [ ] Plot #1 (12/21) - Location plot 
- [ ] Plot #2 (12/21) - Dashboard 
- [ ] Plot #3 (12/21) - Summary 
- [ ] Visualisations created from user-selected filtered data (12/21) 
- [ ] A Python or JavaScript library not shown in class is used in the project (1/2)
- [ ] create a webpage that will hold graphics and create a flask route that renders/loads the webpage (1/2)
- [ ] webpage created to showcase data visualisations runs without error (1/2)
- [ ] replace javascript data files with api routes that transfer data (1/4)
- [ ] add content to presentation (1/4)
- [ ] update readme (Instructions on how to use and interact with the project, paragraph summarising efforts for ethical considerations made in the project, references) - (1/4)
