import { OpenWeatherMapApi } from "./openweathermapapi.mjs";

const api = new OpenWeatherMapApi("");

api.fetchLocations("Frankfurt", fetchWeatherOnLoction);

function fetchWeatherOnLoction(err, data) {
    if(err) {
        console.log("failed.");
        return;
    }
    
    data.forEach( location => {
        const {lat, lon, name, country, state} = location;
        api.fetchWeatherAtLocation(lat, lon, dumpLocation, [name, country, state].join(","));
    });
}

function dumpLocation(err, details, title) {
    console.log(`\
${details.name} / ${title}

* Temperatur: ${details.main.temp}° C
* Wetterlage: ${details.weather[0].description}
* Sichtweite: ${details.visibility}m
* Wind: ${details.wind.speed} km/h aus ${details.wind.deg}°
${'='.repeat(25)}
`);
}