import * as os from "node:os";
import path from "path";
import {readFileSync} from "fs";

const configFile = path.join(os.homedir(), ".openweathermap", "config.json");
let apiKey = null;

try {
    const content = readFileSync(configFile)
    const configData = JSON.parse(content);
    if (!configData.apiKey) throw new Error("no apiKey in config file");

    apiKey = configData.apiKey;
} catch (e) {
    console.log("no configfile at " + configFile, e);
}

export default apiKey;
