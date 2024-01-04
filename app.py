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

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/view1")
def view1():
    return render_template("view1.html")

@app.route("/view2")
def view2():
    return render_template("view2.html")

@app.route("/view3")
def view3():
    return render_template("view3.html")

if __name__ == '__main__':
    app.run(debug=True)




