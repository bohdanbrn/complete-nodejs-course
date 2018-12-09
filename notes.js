
const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesStr = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesStr);
    } catch (e) {
        console.log('File "notes-data.json" does not exist');
    }
    
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
    
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getiing note: ', title);
};

var removeNote = (title) => {
    console.log('Remove note: ', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
