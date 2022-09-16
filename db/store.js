//lookup and use this package for the unique ids. AND REQUIRE IT (utils, fs, and uuid required and used)
//will help with generating unique ids in the db.json file
// https://www.npmjs.com/package/uuid

const { json } = require("express");

//create variables for readFileAsync and writeFileAsync
const readFileAsync = something with util util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//need a class of store

class STORE {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    } //reads from db.json

    write() {
        return writeFileAsync('db/db.json', json.stringify(note)
    } //writes to db, uses json.stringify , writing notes to it, then stringify it

    getNotes() //do some parseing
        return read().then(notes) parse notes concat (JSON.parse(notes))

    addNotes() //need to save title, text = note 
    const { title, text } = note;
        return 
        if (!title || !text) THROW an error title and notes cannot be blank
        //add the unique id to the note using our package
        //create a new variable to hold our new note with the new given id
        const userNote = { title, text, id: //needs to be equal to something}
        //grab all notes and the new note and update notes to return the new note [ ...notes, userNote]

    deleteNotes()
        //use the given id to remove/delete the note
}

module.exports = 