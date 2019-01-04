const request = require('request');

let darkskyWeather = (APIKey, lat, lng) => {
    request({
        url: `https://api.darksky.net/forecast/${APIKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body.currently.temperature);
        }
        else {
            console.log('Unable to fetch weather');
        }
    });
}

module.exports.darkskyWeather = darkskyWeather;
