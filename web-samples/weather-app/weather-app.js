import { OpenWeatherMapApi } from "./openweathermap.api.js";

const API_KEY = new URL(document.URL).searchParams.get("appId");

const openWeatherMap = new OpenWeatherMapApi(API_KEY, displayApiError);
const wetterForm = document.querySelector("#wetter-eingabe");
const wetterEntry = document.querySelector("#wetter-location");
const wetterOut = document.querySelector("#wetter-ausgabe");
const cleanUrl = new URL(document.URL);

function displayApiError(message) {
    wetterOut.innerHTML = `Fehler: ${message}`;
}

function displayWeather(weather, title) {
    let weatherHtml = 
`\
<h3>${weather.name} / ${title}</h3>
<hr>
<ul>
<li>Temperatur: ${weather.main.temp}° C</li>
<li>Wetterlage: ${weather.weather[0].description}</li>
<li>Sichtweite: ${weather.visibility}m</li>
<li>Wind: ${weather.wind.speed} km/h aus ${weather.wind.deg}°</li>
</ul>
`;
wetterOut.innerHTML = weatherHtml;
}

function displayLocations(locationList) {
    let locationHtml = "<ul>" + locationList.map(loc =>
`<li \
data-locationlink="true" \
data-lon="${loc.lon}" \
data-lat="${loc.lat}" \
data-title="${loc.name}, ${loc.country} ${loc.state}">\
${loc.name}, ${loc.country} ${loc.state}</li>`
    ).join("\n") + "</ul>";
    wetterOut.innerHTML = locationHtml;
}

function onClickInAusgabe(e) {
    if (e.target.dataset.locationlink) {
        const { lat, lon, title } = e.target.dataset;
        openWeatherMap.fetchWeatherAtLocation(lat, lon, displayWeather, title);
    }
}

function onSearchLocations(e) {
    e.preventDefault();
    const locQuery = this.children["wetter-location"].value;
    if (locQuery) {
        openWeatherMap.fetchLocations(locQuery, displayLocations);
    }
}

function displayAppIdEntryForm() {
    wetterForm.outerHTML = `<form action="${cleanUrl}" method="GET">
    AppId: <input type="text" placeholder="ihre App Id" name="appId">
    <input type="submit" value="neu starten">
    </form>`;
}

function initWeatherForm() {
    wetterForm.addEventListener("submit", onSearchLocations);
    // listen to all clicks in wetter-ausgabe
    wetterOut.addEventListener("click", onClickInAusgabe);

    if (API_KEY) {
        document.querySelector("body").insertAdjacentHTML("beforeend", "<p>ready</p>")
    } else {
        document.querySelector("body").insertAdjacentHTML("beforeend", "<p>no appId found, add parameter ?appId=... to URL</p>");
        displayAppIdEntryForm();
    }
}

window.addEventListener("load", initWeatherForm);

export {};