const fs = require('fs');
const request = require('request');

// darkSkyApiKey, lat, lng, callback
let getWeather = (APIKey, lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${APIKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let temperatureF = body.currently.temperature;
            let apparentTemperatureF = body.currently.apparentTemperature;

            let temperatureC = ((temperatureF - 32) / 1.8).toFixed(2);
            let apparentTemperatureC = ((apparentTemperatureF - 32) / 1.8).toFixed(2);

            callback(undefined, {
                temperature: temperatureC,
                apparentTemperature: apparentTemperatureC
            });
        }
        else {
            callback('Unable to fetch weather');
        }
    });
}

// location name, temperature(°C), apparent temperature(°C)
let storeWeather = (location, temperature, apparentTemperature) => {
    // get exist weather data
    let storedWeatherStr = fs.readFileSync('weather-data.json');
    let storedWeather = JSON.parse(storedWeatherStr);

    // add new data
    storedWeather.push({
        date: Date.now(),
        location: location,
        temperature: temperature,
        apparentTemperature: apparentTemperature
    });

    // save new data to file
    fs.writeFileSync('weather-data.json', JSON.stringify(storedWeather));
}

module.exports.getWeather = getWeather;
module.exports.storeWeather = storeWeather;
