const request = require('request');

var mapquestAddress = (mapquestKey, address, callback) => {
    let encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${mapquestKey}&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect map service');
        }
        else if (body.info.statuscode !== 0) {
            callback('Illegal address for location');
        }
        else if (!body.results.length || !body.results[0].locations.length) {
            callback('Unable to find that address');
        }
        else {
            callback(undefined, {
                address: body.results[0].providedLocation.location,
                lat: body.results[0].locations[0].latLng.lat,
                lng: body.results[0].locations[0].latLng.lng,
            });
        }

    });
}

module.exports.mapquestAddress = mapquestAddress;
