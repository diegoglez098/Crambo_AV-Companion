import json
import os
import flask
import sys
import telnetlib
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/API/*": {"origins": "*"}})

Folder = os.path.dirname(os.path.abspath(
    "configs/blackmagic-smart-12x12.json"))
blackmagic = os.path.join(Folder, 'blackmagic-smart-12x12.json')


with open(blackmagic, "r+") as f:
    datos = f.read()
    data = json.loads(datos)


@app.route('/API/v1.0/getIP', methods=['GET'])
@cross_origin()
def getIP():
    return str(data["IP"])


@app.route('/API/v1.0/routing', methods=['GET', 'POST'])
def routing():
    try:
        tn = telnetlib.Telnet(data["IP"], data['Port'], 15)
    except:
        return "No se ha podido conectar a " + data["Device"]

    tn.write("VIDEO OUTPUT ROUTING \n")
    tn.write(output + " " + input + "\n")
    tn.write("\n")

    return "Conexion establecida a " + data["Device"]


app.run(host="192.168.0.16", port="5000")
