from flask import Flask, send_from_directory, request

import issLocation

app = Flask(__name__)


@app.route('/')
def index():
    print("sending: index.html")
    return send_from_directory('static', 'index.html')


@app.route("/<path:filename>")
def return_file(filename):
    return send_from_directory("static", filename)

@app.route("/issLocation")
def send_location():
    location = issLocation.getIssLocation()
    print(location)
    return location


@app.route("/about")
def about():
    return send_from_directory("static", "about.html")


app.run("localhost", 8000, debug=True)
