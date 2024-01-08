import json
import geopandas as gpd
from shapely.geometry import Point

def convert_json_to_geojson(input_json_file, output_geojson_file, states_geojson_file):
    # Read the input JSON file
    with open(input_json_file, 'r') as json_file:
        data = json.load(json_file)

    # Read the GeoJSON file containing state boundaries
    states_gdf = gpd.read_file(states_geojson_file)

    # Merge your data with state boundaries based on a common attribute
    merged_gdf = states_gdf.merge(data, how='left', left_on='STATE_NAME', right_on='state')

    # Create GeoJSON features with state geometries
    features = []
    for index, row in merged_gdf.iterrows():
        geometry = row['geometry']
        properties = row.drop('geometry')  # Exclude the geometry column from properties
        feature = geojson.Feature(geometry=geometry, properties=properties)
        features.append(feature)

    feature_collection = geojson.FeatureCollection(features)

    # Write the GeoJSON data to the output file
    with open(output_geojson_file, 'w') as geojson_file:
        geojson.dump(feature_collection, geojson_file, indent=2)

# Example usage
input_json_file = 'input.json'
output_geojson_file = 'output.geojson'
states_geojson_file = 'states.geojson'
convert_json_to_geojson(input_json_file, output_geojson_file, states_geojson_file)

