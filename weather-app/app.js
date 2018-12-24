const request = require('request');
const yargs = require('yargs');

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

let encodedAddress = encodeURIComponent(argv.a);

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=Ai05Ul0OA7ODe2jdgajLESdCSCGknADa&location=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    var location = body.results[0].providedLocation.location;
    var lat = body.results[0].locations[0].latLng.lat;
    var lng = body.results[0].locations[0].latLng.lng;

    console.log(`Location: ${location}`);
    console.log(`Latitude: ${lat}`);
    console.log(`Longitude: ${lng}`);
});