function formatLocations(locations) {
    const menuOut = [];
    for (let [index, location] of locations.entries()) {
        const {name, state, country, lat, lon} = location;
        menuOut.push(`Location ${index}: ${name}, ${country}, ${state ?? 'state n/a'} (${lat},${lon})`);
    }

    return menuOut.join("\n");
}

// Formatiert einen OpenWeatherMap-Datensatz (Current Weather Data API)
// zu einem übersichtlichen Text-Dump.

// Wandelt einen Unix-Zeitstempel (Sekunden) + Zeitzonen-Offset (Sekunden)
// in eine lokale Datums-/Zeit-Zeichenkette um.
function toLocal(unixSeconds, tzOffsetSeconds = 0) {
    // (t + tz) verschiebt in Ortszeit; als UTC formatiert ergibt das die Ortszeit.
    const d = new Date((unixSeconds + tzOffsetSeconds) * 1000);
    const pad = (n) => String(n).padStart(2, "0");
    const date = `${pad(d.getUTCDate())}.${pad(d.getUTCMonth() + 1)}.${d.getUTCFullYear()}`;
    const time = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
    return {date, time};
}

// Übersetzt eine Windrichtung in Grad in eine Himmelsrichtung.
function windDirection(deg) {
    const dirs = ["Norden", "Nordost", "Osten", "Südost",
        "Süden", "Südwest", "Westen", "Nordwest"];
    return dirs[Math.round(deg / 45) % 8];
}

// Erzeugt einen mehrzeiligen Text-Dump der wichtigsten Wetterwerte.
function formatWeather(data) {
    const tz = data.timezone ?? 0;
    const w = data.weather?.[0] ?? {};
    const m = data.main ?? {};
    const wind = data.wind ?? {};

    const dt = toLocal(data.dt, tz);
    const sunrise = toLocal(data.sys?.sunrise, tz);
    const sunset = toLocal(data.sys?.sunset, tz);

    const lines = [
        `WETTERBERICHT: ${data.name}${data.sys?.country ? ` (${data.sys.country})` : ""}`,
        "".padEnd(46, "─"),
        `Position       : ${data.coord?.lat}° N, ${data.coord?.lon}° O`,
        `Zeitpunkt      : ${dt.date}, ${dt.time} Uhr (Ortszeit)`,
        "",
        `Wetter         : ${w.description ?? "?"} (${w.main ?? "?"})`,
        "",
        `Temperatur     : ${m.temp} °C  (gefühlt ${m.feels_like} °C)`,
        `  min / max    : ${m.temp_min} °C / ${m.temp_max} °C`,
        `Luftfeuchte    : ${m.humidity} %`,
        `Luftdruck      : ${m.pressure} hPa`,
        "",
        `Wind           : ${wind.speed} m/s aus ${windDirection(wind.deg ?? 0)} (${wind.deg ?? 0}°)`,
        `Bewölkung      : ${data.clouds?.all} %`,
        `Sichtweite     : ${(data.visibility / 1000).toFixed(1)} km`,
        "",
        `Sonnenaufgang  : ${sunrise.time} Uhr`,
        `Sonnenuntergang: ${sunset.time} Uhr`,
    ];

    return lines.join("\n");
}

export {formatLocations, formatWeather}