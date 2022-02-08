import * as https from "https";
import fs from "fs";
import * as os from "os";
import path from "path";

const OPEN_WEATHER_API = "https://api.openweathermap.org"

class OpenWeatherMapApi {
    #appId;

    constructor(appId) {
        if(!appId) {
            this.#readApiKeyFile()
        }
        else {
            this.#appId = appId;
        }
    }

    fetchWeatherAtLocation(lat, lon, callback, ...parameters) {
        let url = this.#fetchWeatherURL(lat, lon);
        return this.#fetchApiData(url, callback, ...parameters)
    }

    fetchLocations(locQuery, callback) {
        let url = this.#fetchLocationURL(locQuery);
        return this.#fetchApiData(url, callback);
    }

    defaultErrorCallback(message) {
        alert(message);
    }

    #readApiKeyFile() {
        const apipath = path.join(os.homedir(), ".openweathermap", "appid");
        let fileData = fs.readFileSync(apipath, {encoding: "utf-8"});
        this.#appId = fileData.trim();
    }

    #appendAppId(url) {
        url.searchParams.set("appid", this.#appId);
    }
    
    #fetchLocationURL(query) {
        let url = new URL(OPEN_WEATHER_API + "/geo/1.0/direct?limit=5");
        this.#appendAppId(url);
        url.searchParams.set("q", query);
        return url;
    }
 
    #fetchWeatherURL(lat, lon) {
        let url = new URL(OPEN_WEATHER_API + "/data/2.5/weather");
        this.#appendAppId(url);
        url.searchParams.set("lat", lat);
        url.searchParams.set("lon", lon);
        url.searchParams.set("units", "metric");
        url.searchParams.set("lang", "de");
        return url;
    }
 
    #fetchApiData(url, callback, ...parameters) {
        let apiError = false;
        let self = this;

        let options = {
            headers: {
                'Accepts' : 'application/json'
            }
        };

        let jsonMessageStr = "";
        let jsonMessage = null;

        const handleError = function(message) {
            apiError = true;
            jsonMessage = new Error(message);
            console.log(`Error: ${message}`);
            callback(jsonMessage, null, ...parameters); // execute callback with error
        }

        https.get(url, options, (response) => {
            apiError = response.statusCode > 299;
            if(apiError) handleError("Return code not in OK range " + response.statusCode);

            response.setEncoding("utf8");

            response.on("data", (chunk) => jsonMessageStr+=chunk);
            response.on("end", () => {
                try {
                    if(!response.complete) {
                        handleError("The message has not been transmitted completely");
                    }
    
                    jsonMessage = JSON.parse(jsonMessageStr);                        
                    callback(null, jsonMessage, ...parameters); // execute callback with success
                } catch (error) {
                    handleError("The recieved json data is not correct: " + error.message);
                }
            });
        })
        // add a default error handler
        .on("error", (e) => handleError("request failed " + e.message));
    }

}

export { OpenWeatherMapApi };