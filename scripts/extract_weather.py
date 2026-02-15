# this is the python file that extracts the weather information
import requests 
import json
import pandas as pd 
from datetime import datetime

# location of the weather 
SYD_LATITUDE = -33.8688
SYD_LONGTITUDE = 151.2093

def extract_weather():
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": SYD_LATITUDE,
        "longitude": SYD_LONGTITUDE,
        "current": ["temperature_2m", "relative_humidity_2m", "weather_code", "rain", "is_day"],
        "timezone": "Australia/Sydney"
    }


    #create a response into json
    response = requests.get(url, params=params)
    response.raise_for_status()
    data = response.json()

    # place the data in dictionary
    current = data['current']
    weather_payload = {
        "temperature": current['temperature_2m'],
        "humidity": current['relative_humidity_2m'],
        "status_code": current['weather_code'],
        "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "location": "Sydney"
    }

    # overwrites it 
    with open('src/_data/weather.json', 'w') as f:
        json.dump(weather_payload, f, indent=4)
    
if __name__ == "__main__":
    extract_weather()