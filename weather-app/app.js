const yargs = require('yargs');
const mapquest = require('./mapquest/mapquest');
const darksky = require('./darksky/darksky');


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

// mapquest.mapquestAddress(mapquestKey, argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     }
//     else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });


let darkskyRes = darksky.darkskyWeather(darkSkyKey, 49.833277, 24.122925);
console.log(darkskyRes);
