const moment = require('moment');

// let date = new Date();
// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// console.log(months[date.getMonth()]);

// let date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// let date = moment();
// console.log(date.format('hh:mm a'));
// console.log(date.subtract().format('h:mm a'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

// let date = moment(createdAt);
// console.log(date.format('hh:mm a'));
