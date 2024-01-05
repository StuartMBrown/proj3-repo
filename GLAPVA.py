# Dependencies and Setup
import pandas as pd
from pathlib import Path

# File to Load (Remember to Change These)
illinois_data_to_load = Path("speciesIL.csv")
indiana_data_to_load = Path("speciesIN.csv")
michigan_data_to_load = Path("speciesMI.csv")
minnesota_data_to_load = Path("speciesMN.csv")
new_york_data_to_load = Path("speciesNY.csv")
ohio_data_to_load = Path("speciesOH.csv")
pennsylvania_data_to_load = Path("speciesPA.csv")
wisconsin_data_to_load = Path("speciesWI.csv")


# Read School and Student Data File and store into Pandas DataFrames
illinois_data = pd.read_csv(illinois_data_to_load)
indiana_data = pd.read_csv(indiana_data_to_load)
michigan_data = pd.read_csv(michigan_data_to_load)
minnesota_data = pd.read_csv(minnesota_data_to_load)
new_york_data = pd.read_csv(new_york_data_to_load)
ohio_data = pd.read_csv(ohio_data_to_load)
pennsylvania_data = pd.read_csv(pennsylvania_data_to_load)
wisconsin_data = pd.read_csv(wisconsin_data_to_load)

# insert state column for each csv
illinois_data['state'] = 'IL'
indiana_data['state'] = 'IN'
michigan_data['state'] = 'MI'
minnesota_data['state'] = 'MN'
new_york_data['state'] = 'NY'
ohio_data['state'] = 'OH'
pennsylvania_data['state'] = 'PA'
wisconsin_data['state'] = 'WI'

# Combine all DataFrames into one
all_data = pd.concat([
    illinois_data,
    indiana_data,
    michigan_data,
    minnesota_data,
    new_york_data,
    ohio_data,
    pennsylvania_data,
    wisconsin_data
], ignore_index=True)

# Convert the combined DataFrame to JSON and save it to a file
json_output_file = Path("combined_data.json")
all_data.to_json(json_output_file, orient="records")

print(f"Combined data has been saved to {json_output_file}")

# convert the combined dataframe to csv and save it to a file
# export to replace current CSV
all_data.to_csv('all_data.csv', encoding='utf-8', index=False, header=True)