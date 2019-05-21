from flask import Flask, send_from_directory, request
from flask_socketio import SocketIO

import issLocation


app = Flask(__name__)
server = SocketIO(app)


@app.route('/')
def index():
    print("sending: index.html")
    return send_from_directory('static', 'index.html')


@app.route("/<path:filename>")
def return_file(filename):
    return send_from_directory("static", filename)


@app.route("/iss-location")
def location():
    return iss-location.getIssLocation()

@app.route("/about")
def about():
    return send_from_directory("static", "about.html")


app.run("localhost", 8000)
