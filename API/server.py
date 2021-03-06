import json
import os
from flask import Flask, request, jsonify
import telnetlib
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config["DEBUG"] = True
cors = CORS(app, resources={
            r"/API/*": {"origins": "*"}})
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
    content = request.get_json()

    print("VIDEO OUTPUT ROUTING \n")
    print(str(content['Output']) + " " + str(content['Input']) + "\n")
    print("\n")

    try:
        tn = telnetlib.Telnet(data["IP"], data['Port'], 5)
    except:
        return "No se ha podido conectar a " + data["Device"]

    content = request.get_json()
    print("VIDEO OUTPUT ROUTING \n")
    print("VIDEO OUTPUT ROUTING \n")

    tn.write("VIDEO OUTPUT ROUTING \n")
    tn.write(str(content['Output']) + " " + str(content['Input']) + "\n")
    tn.write("\n")
    tn.close()

    return "Enviado correctamente a " + data["Device"]


@app.route('/API/v1.0/test', methods=['POST'])
@cross_origin()
def testing():
    print(request.is_json)
    content = request.get_json()
    print("La salida es: "+str(content['Output']) +
          " y la entrada es: "+str(content['Input']))
    return 'JSON posted'


@app.route('/API/v1.0/blackmagic_connect', methods=['GET'])
@cross_origin()
def connect():
    try:
        connection = telnetlib.Telnet(data["IP"], data['Port'], 0)
    except:
        return 0

    connection.close()
    return 1


app.run(host="192.168.0.220", port="5000")
