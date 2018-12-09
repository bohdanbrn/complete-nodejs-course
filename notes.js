
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesStr = fs.readFileSync('notes-data.json');
        return JSON.parse(notesStr);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
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
