# from flask import Flask, jsonify
# from flask_cors import CORS
# import speech_recognition as sr
# import re

# app = Flask(__name__)
# CORS(app)

# def extract_patient_data(text):
#     data = {}

#     name_match = re.search(r"नाम\s+(.+?)\s+है", text)
#     if name_match:
#         data["name"] = name_match.group(1)

#     age_match = re.search(r"(\d+)\s*साल", text)
#     if age_match:
#         data["age"] = int(age_match.group(1))

#     weight_match = re.search(r"(\d+)\s*किलो", text)
#     if weight_match:
#         data["weight"] = int(weight_match.group(1))

#     return data


# @app.route("/voice")
# def voice():

#     r = sr.Recognizer()

#     with sr.Microphone() as source:
#         print("Speak now...")
#         r.adjust_for_ambient_noise(source)
#         audio = r.listen(source)

#     try:
#         text = r.recognize_google(audio, language="hi-IN")
#         data = extract_patient_data(text)

#         return jsonify({
#             "text": text,
#             "data": data
#         })

#     except:
#         return jsonify({
#             "text": "Could not understand",
#             "data": {}
#         })


# if __name__ == "__main__":
#     app.run(port=5000, debug=True)
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend Running 🚀"

@app.route("/voice")
def voice():
    return jsonify({
        "name": "Demo",
        "age": 20,
        "weight": 65
    })

if __name__ == "__main__":
    app.run(debug=True)