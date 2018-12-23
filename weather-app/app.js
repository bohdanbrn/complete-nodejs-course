const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=Ai05Ul0OA7ODe2jdgajLESdCSCGknADa&location=Lysynychi%20Ukraine',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});