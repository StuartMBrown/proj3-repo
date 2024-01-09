## Project overview - Visualization Track 
The Great Lakes Endangered Species Project focuses on raising awareness about the species in the Great Lakes region, specifically in states such as Minnesota, Wisconsin, Illinois, Indiana, Ohio, Michigan, Pennsylvania, and New York. The project employs three main views to convey crucial information. View #1 presents a location chart showcasing the distribution of threatened, endangered, and nonessential species, using different layers to distinguish each category. View #2 offers a dynamic dashboard with dropdown options for selecting a specific state and species (including common names). This view includes a pop-up gauge plot displaying the levels of threatened, endangered, and nonessential species, along with additional information such as the listing location, images, and brief descriptions of the animals. View #3 serves as a comprehensive summary of species distribution in the Great Lakes region. By providing a comprehensive visual representation and interactive features, the project aims to shed light on the current status of these animals and promote awareness for their conservation in the Great Lakes region.

Technologies used: Python, HTML, Javascript, PostgresSQL, CSS, Jupyter Notebooks and various Python libraries 

Contributors: Jian Qiang Liu, Kelsey Sniatynsky, Maryam Shaaban, Sania Sufi, Stuart Brown, Valeria Briones

Environmental Conservation Online System: https://ecos.fws.gov/ecp/report/species-listings-by-state-totals?statusCategory=Listed

## Table of Contents
[Important Definitions](https://github.com/StuartMBrown/proj3-repo#important-definitions)

[Pull and Clean Data](https://github.com/StuartMBrown/proj3-repo#1-pull-and-clean-data)

[Cover Page](https://github.com/StuartMBrown/proj3-repo/blob/main/README.md#2-cover-page)

[Map View](https://github.com/StuartMBrown/proj3-repo#map-view)

[Dashboard of Species](https://github.com/StuartMBrown/proj3-repo#dashboard-of-species)

[Sun Burst](https://github.com/StuartMBrown/proj3-repo#sun-burst)

[Conclusion/Future Considerations](https://github.com/StuartMBrown/proj3-repo#6-conclusion)

[Ethical Considerations](https://github.com/StuartMBrown/proj3-repo/tree/main#7-ethical-considerations)

## Important Definitions 
* A "non-essential species" based of the best available information,is the experimental population not essential for the continued existence of the species.
* A “threatened species” is one that is likely to become endangered in the foreseeable future throughout all or a significant portion of its range.
* An “endangered species” is one that is in danger of extinction throughout all or a significant portion of its range.
* An experimental population is a population of an endangered or threatened species that is released into the wild outside of the current range of the species with the aim of contributing to the conservation of the species.

## 1. Pull and Clean Data 
We extracted CSV files from the US Fish and Wildlife Services Website. After obtaining the raw data, we organized it within a PostgreSQL database. The PostgreSQL structure facilitated efficient data retrieval. To ensure data integrity, we utilized Python scripts for cleaning, addressing inconsistencies and missing values. This streamlined process of web scraping, PostgreSQL database management, and Python-based data cleaning established a reliable dataset for our analytical pursuits.

<img width="1307" alt="Screenshot 2024-01-06 at 8 25 27 PM" src="https://github.com/StuartMBrown/proj3-repo/assets/139585143/3699a72a-09f6-47cd-8468-acd15c5ad005">
<img width="1202" alt="Screenshot 2024-01-07 at 4 37 04 PM" src="https://github.com/StuartMBrown/proj3-repo/assets/139585143/c3505f31-a96e-4cc8-af85-abc6013256ff">

## 2. Cover Page
<img width="1470" alt="Screenshot 2024-01-07 at 6 18 44 PM" src="https://github.com/StuartMBrown/proj3-repo/assets/139585143/73ad8d42-bb5d-4523-8256-d165ae2ab182">

## 3. Map View 
<img width="1470" alt="Screenshot 2024-01-08 at 7.03.19 PM" src="/Users/mshaaban/Desktop/Screenshot 2024-01-08 at 7.03.19 PM.png">

## 4. Dashboard of Species
<img width="1470" alt="Screenshot 2024-01-07 at 6 21 35 PM" src="https://github.com/StuartMBrown/proj3-repo/assets/139585143/69900664-ce29-4314-979c-37f503d0be01">

## 5. Sun Burst
<img width="1445" alt="Screenshot 2024-01-07 at 4 49 40 PM" src="https://github.com/StuartMBrown/proj3-repo/assets/139585143/d0182567-fc04-4cb9-bab4-80d802d99d03">

## 6. Conclusion/Future Considerations 
In conclusion, the Great Lakes Endangered Species Project represents a crucial initiative in understanding and addressing the challenges faced by species in this vital ecosystem. Our findings underscore the urgency of conservation efforts, revealing that 55% of the Great Lakes species we gathered information on are at risk of becoming endangered in the foreseeable future. Looking ahead, it is imperative to enhance the project's database utilization and incorporation of multiple sources to provide a more comprehensive view of the species' status. This strategic approach could aid in identifying and prioritizing conservation efforts, informing environmental policies, and directing funding allocations. Moreover, the project serves as a foundation for educational outreach and raising awareness about threatened, endangered, and nonessential species. 

## 7. Ethical Considerations
In our project focusing on endangered and threatened species in the Great Lakes states, ethical considerations played a pivotal role in every stage of the process. Transparency was maintained by clearly stating the sources of our data and methodologies, allowing for scrutiny and validation. We also made efforts to avoid perpetuating bias by ensuring diverse representation of species and worked to minimize unintentional misinformation. Prior to collecting data, we conducted thorough research to ensure that the websites from which we scraped information permitted such data extraction, adhering to ethical practices. Additionally, we meticulously reviewed and complied with relevant legal frameworks and terms of service to guarantee that the data we acquired could be used responsibly and lawfully. This approach not only ensured the integrity of our project but also underscored our commitment to ethical data handling and respect for the rights and regulations governing the information we accessed. Lastly, we committed to sharing our findings responsibly, emphasizing the importance of using the information to foster conservation efforts and raise awareness without causing harm to the species or their habitats.



