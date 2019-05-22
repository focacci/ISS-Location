import urllib.request
import json

def getIssLocation():
    req = urllib.request.urlopen('http://api.open-notify.org/iss-now.json').read().decode()
    #print(data)
    #return location["iss_postition"]
    #print(data)
    data = json.loads(req)
    position = data["iss_position"]
    send = [float(position["longitude"]), float(position["latitude"])]
    return json.dumps(send)

#getIssLocation()
