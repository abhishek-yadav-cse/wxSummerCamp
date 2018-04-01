from flask import Flask, request, jsonify
import requests
app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route("/test")
def get_wrf():
    r = requests.get('http://www.met.sjsu.edu/weather/models/WRF_spartan/txt/sjsu_WRF_hrlyPrecip_2017101800.txt')
    return r.text

@app.route("/rainfall")
def get_rainfall():
    r = requests.get('http://www.met.sjsu.edu/weather/models/rainfall.php?starttime=2017-11-14%2000:00:00&endtime=2017-11-16%2023')
    return r.text


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')


