import json
import os
from flask import Flask, request, jsonify
import telnetlib
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config["DEBUG"] = True
cors = CORS(app, resources={r"/API/*": {"origins": "http://localhost:3000"}})
app.config['CORS_HEADERS'] = 'Content-Type'

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


@app.route('/API/v1.0/blackmagic', methods=['GET', 'POST'])
def routing():
    try:
        tn = telnetlib.Telnet(data["IP"], data['Port'], 5)
    except:
        return "No se ha podido conectar a " + data["Device"]

    content = request.get_json()
    print(content)
    tn.write("VIDEO OUTPUT ROUTING \n")
    tn.write(str(content['Output']) + " " + str(content['Input']) + "\n")
    tn.write("\n")

    return "Enviado correctamente a " + data["Device"]


@app.route('/API/v1.0/test', methods=['POST'])
@cross_origin()
def testing():
    print(request.is_json)
    content = request.get_json()
    print("La salida es: "+str(content['Output']) +
          " y la entrada es: "+str(content['Input']))
    return 'JSON posted'


app.run(host="192.168.0.16", port="5000")
