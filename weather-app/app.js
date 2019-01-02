const yargs = require('yargs');
const mapquest = require('./mapquest/mapquest');


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

mapquest.mapquestAddress(mapquestKey, argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});
