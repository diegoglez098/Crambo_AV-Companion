import json
import os
from flask import Flask, request, jsonify
import sys
import telnetlib
from flask_cors import CORS, cross_origin

app = Flask(__name__)
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


@app.route('/API/v1.0/routing', methods=['POST'])
def routing():
    try:
        tn = telnetlib.Telnet(data["IP"], data['Port'], 15)
    except:
        return "No se ha podido conectar a " + data["Device"]
    content = request.get_json()

    tn.write("VIDEO OUTPUT ROUTING \n")
    tn.write(str(content['output']) + " " + str(content['input']) + "\n")
    tn.write("\n")

    return "Conexion establecida a " + data["Device"]


@app.route('/API/v1.0/test', methods=['POST'])
def testing():
    print(request.is_json)
    content = request.get_json()
    print("La salida es: "+content['output'] +
          " y la entrada es: "+content['input'])
    return 'JSON posted'


app.run(host="192.168.0.16", port="5000")
