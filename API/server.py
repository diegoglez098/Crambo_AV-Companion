import json
import os
import flask
import sys
import telnetlib

app = flask.Flask(__name__)
app.config["DEBUG"] = True

Folder = os.path.dirname(os.path.abspath(
    "configs/blackmagic-smart-12x12.json"))
blackmagic = os.path.join(Folder, 'blackmagic-smart-12x12.json')


with open(blackmagic, "r+") as f:
    datos = f.read()
    data = json.loads(datos)


@app.route('/API/v1.0/getIP', methods=['GET'])
def getIP():
    return data["IP"]


@app.route('/API/v1.0/routing', methods=['GET', 'POST'])
def routing():
    try:
        tn = telnetlib.Telnet(data["IP"], data['Port'], 15)
    except:
        return "No se ha podido conectar a " + data["Device"]

    tn.write("VIDEO OUTPUT ROUTING \n")
    tn.write(output + " " + input + "\n")
    tn.write("\n")


app.run()
