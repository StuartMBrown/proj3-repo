import numpy as numpy
import json
from flask import Flask, jsonify, render_template
import datetime as dt
from sqlalchemy import func
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import numpy as np
import sqlite3

### converting JSON file to sqlite db

# create a connection to the SQlite database
conn = sqlite3.connect('example.db')



#################################################
# Database Setup
#################################################

engine = create_engine ("sqlite:///database.sql")

#reflect an exisiting database into a new model
Base = automap_base()
#reflect the tables
Base.prepare(engine,reflect= True)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

# Function to retrieve data from SQLite database
def get_data_from_database():
    connection = sqlite3.connect('database.sql.db')  # Replace 'your_database.db' with your actual SQLite database file
    cursor = connection.cursor()

    # Example query: Select data from a table
    cursor.execute('SELECT scientific_name, common_name FROM combined_data.json')
    data = cursor.fetchall()

    connection.close()

    return data

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/api/v1.0/??")
def combine_data():
    # Some data processing logic here
    data1 = "Hello"
    data2 = "World"
    combined_data = f"{data1}, {data2}"
    return combined_data

@app.route('/')
def index():
    # Get combined data
    data = combine_data()

    # Render the HTML template with the combined data
    return render_template('index.html', combined_data=data)

if __name__ == '__main__':
    app.run(debug=True)




