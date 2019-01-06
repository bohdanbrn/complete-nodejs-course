const yargs = require('yargs');
const mapquest = require('./mapquest/mapquest');
const weather = require('./weather/weather');

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
let darkSkyKey = '2b6789cb0c2f2d67555d2c52574f5e79';

mapquest.mapquestAddress(mapquestKey, argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(results.address);
        
        weather.getWeather(darkSkyKey, results.lat, results.lng, (weatherErrorMessage, weatherResults) => {
            if (weatherErrorMessage) {
                console.log(weatherErrorMessage);
            }
            else {
                console.log(`It's currently ${weatherResults.temperature} °C. It feels like ${weatherResults.apparentTemperature} °C`);
            }
        });

    }
});

