CREATE TABLE all_data (
	id SERIAL PRIMARY KEY,
    scientific_name VARCHAR (255),
	common_name VARCHAR (255),
	where_listed VARCHAR (255),
	region INT,
	ESA_listing_status VARCHAR (255),
	group_name VARCHAR (255),
	state VARCHAR (255)
);

SELECT * from all_data;