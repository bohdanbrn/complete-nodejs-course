var obj = {
    name: 'Bohdan'
};

var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

var personStr = '{"name": "Bohdan", "age": 23}';
var personObj = JSON.parse(personStr);

// console.log(personStr);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);


var noteStr = fs.readFileSync('notes.json');
var note = JSON.parse(noteStr);

console.log(typeof note);
console.log(note.title);