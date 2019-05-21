import urllib.request
import json

def getIssLocation():
    req = urllib.request.urlopen('http://api.open-notify.org/iss-now.json').read().decode()
    #print(data)
    #return location["iss_postition"]
    #print(data)
    position = json.loads(data)["iss_position"]
    data = [double(position["latitude"]), double(position["longitude"])]
    return json.dumps(data)

#getIssLocation()
