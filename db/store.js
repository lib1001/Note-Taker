const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// work on delete section and add console.logs
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

  addNote() {
    const { title, text } = note;
    const userNote = { title, text, id: uuidv4() };

    });
  }
}

module.exports = new Store();
