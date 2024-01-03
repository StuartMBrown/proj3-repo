import numpy as numpy
import json
from flask import Flask, jsonify, render_template
import datetime as dt
from sqlalchemy import func
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import numpy as np
from config import username, password, database

#################################################
# Database Setup
#################################################

engine = create_engine(f"postgresql+psycopg2://{username}:{password}@localhost:5432/{database}")

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
    connection = sqlite3.connect('database.sql.db') 
    cursor = connection.cursor()

    # Select data from a table
    cursor.execute('SELECT scientific_name, common_name FROM combined_data.json')
    data = cursor.fetchall()

    connection.close()

    return data

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/view2")
def view2():
    return render_template("view2.html")


@app.route("/api/v1.0/??")
def combine_data():
    # Some data processing logic here
    data1 = "Hello"
    data2 = "World"
    combined_data = f"{data1}, {data2}"
    return combined_data

if __name__ == '__main__':
    app.run(debug=True)




