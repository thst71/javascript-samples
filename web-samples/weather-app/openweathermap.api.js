const OPEN_WEATHER_API = "https://api.openweathermap.org"

class OpenWeatherMapApi {
    #appId;
    #errorCallback;
    constructor(appId, errorCallback) {
        this.#appId = appId;
        this.#errorCallback = errorCallback ? errorCallback : this.defaultErrorCallback;
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
        return fetch(url)
            .then(response => {
                apiError = !response.ok;
                return response.json();
            })
            .then(payload => {
                if(apiError) throw payload;
                callback(payload, ...parameters);
            })
            .catch(e => {
                let message = "";
                if(e instanceof Error) {
                    message = e.message;
                } else {
                    message = `API konnte nicht abgerufen werden ${e.cod} - ${e.message}`;
                }
                self.#errorCallback(message);
            });
    }

}

export { OpenWeatherMapApi };