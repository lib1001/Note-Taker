const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      const currentNotes = JSON.parse(notes);
      return currentNotes;
    });
  }

  addNotes(note) {
    const { title, text } = note;
    if (!title || !text) {
      errorState.note = "Title and notes cannot be blank!";
    }
    const userNote = { title, text, id: uuidv4() };
    this.getNotes().then((notes) => {
      notes.push(userNote);
      return this.write(notes);
    });
  }


}
module.exports = new Store();
