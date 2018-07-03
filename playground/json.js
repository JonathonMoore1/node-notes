// const personString = {
//     "name": "Jon",
//     "age": 25

// };

// module.exports = personString;

// const personString = '{"name": "Jon", "age": 28}';
// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(typeof personString);

const fs = require('fs');

var originalNote = {
    title: "some title",
    body: "some body"
};

var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString, originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note, note);
console.log(note.title);