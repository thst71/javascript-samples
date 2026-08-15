import {createInterface} from 'node:readline/promises';
import {OpenWeatherMapApi} from './openweathermap.async.api.js';
import {formatLocations, formatWeather} from "./format.mjs";

import apiKey from "./openweathermap.apikey.mjs"

const api = new OpenWeatherMapApi(apiKey);

function isExitInput(userEntry) {
    let exitCheck = userEntry.trim().replace(/exit/gi, '');
    return exitCheck === '';
}

async function weatherMenu(locations, rl) {
    const locationsMenu = formatLocations(locations);
    while (true) {
        console.log(locationsMenu);

        let locationIndex = await rl.question('Select a location index to fetch weather (or type "exit" to quit): ');
        if (isExitInput(locationIndex)) {
            console.log('... aborting weather fetch, returning to city input.');
            break;
        }
        if (!(locationIndex in locations)) {
            console.log('Invalid location index. Please try again.');
            continue;
        }

        let {lat, lon} = locations[locationIndex];
        let weather = await api.fetchWeatherAtLocation(lat, lon);

        console.log(formatWeather(weather));
    }
}

async function mainloop() {

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    while (true) {

        let city = await rl.question('Enter a city name: ');

        if (isExitInput(city)) {
            console.log('Exiting...');
            break;
        }

        let locations = await api.fetchLocations(city);
        if (!locations.length) {
            console.log('No locations found for the given city.');
            continue;
        }

        await weatherMenu(locations, rl);
    }

    rl.close();
}

mainloop();