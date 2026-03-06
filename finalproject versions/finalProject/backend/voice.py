import speech_recognition as sr
import re

def extract_patient_data(text):
    data = {}

    name_match = re.search(r"नाम\s+(.+?)\s+है", text)
    if name_match:
        data["name"] = name_match.group(1)

    age_match = re.search(r"(\d+)\s*साल", text)
    if age_match:
        data["age"] = int(age_match.group(1))

    weight_match = re.search(r"(\d+)\s*किलो", text)
    if weight_match:
        data["weight"] = int(weight_match.group(1))

    return data