const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let mapquestKey = 'Ai05Ul0OA7ODe2jdgajLESdCSCGknADa';
let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapquestKey}&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.info.statuscode !== 0) {
        throw new Error('Illegal address for location');
    }
    else if (!response.data.results.length || !response.data.results[0].locations.length) {
        throw new Error('Unable to find that address');
    }

    let darkSkyKey = '2b6789cb0c2f2d67555d2c52574f5e79';
    let lat = response.data.results[0].locations[0].latLng.lat;
    let lng = response.data.results[0].locations[0].latLng.lng;
    let weatherUrl = `https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`;
    console.log(response.data.results[0].providedLocation.location);
    return axios.get(weatherUrl);
}).then((response) => {
    let temperatureF = response.data.currently.temperature;
    let apparentTemperatureF = response.data.currently.apparentTemperature;

    let temperatureC = ((temperatureF - 32) / 1.8).toFixed(2);
    let apparentTemperatureC = ((apparentTemperatureF - 32) / 1.8).toFixed(2);

    console.log(`It's currently ${temperatureC} °C. It feels like ${apparentTemperatureC} °C`);
}).catch((e) => {
    if (e.code == 'ENOTFOUND') {
        console.log('Unable to connect it API servers.');
    }
    else {
        console.log(e.message);
    }
    console.log(e);
});