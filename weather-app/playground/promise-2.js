const request = require('request');

let mapquestKey = 'Ai05Ul0OA7ODe2jdgajLESdCSCGknADa';

let geocodeAddress = (mapquestKey, address) => {
    let encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=${mapquestKey}&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error || response.statusCode != 200 || !body.info) {
                reject('Unable to connect map service');
            }
            else if (body.info.statuscode !== 0) {
                reject('Illegal address for location');
            }
            else if (!body.results.length || !body.results[0].locations.length) {
                reject('Unable to find that address');
            }
            else {
                resolve({
                    address: body.results[0].providedLocation.location,
                    lat: body.results[0].locations[0].latLng.lat,
                    lng: body.results[0].locations[0].latLng.lng,
                });
            }
    
        });
    });
};

geocodeAddress(mapquestKey, '81126').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
})