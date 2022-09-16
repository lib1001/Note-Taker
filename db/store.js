











// const util = require('util');
// const fs = require('fs');
// // const { v4: uuidv4 } = require("uuid");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);
// const noteData = "./db/db.json";

// class STORE {
//     async readNotes() {
//         try {
//           const notesRaw = await readFileAsync(noteData, "UTF8");
//           return notesRaw ? JSON.parse(notesRaw) : [];
//         } catch (error) {
//           throw error;
//         }
//       }
    
//       async addNote(data) {
//         try {
//           await writeFileAsync(noteData, JSON.stringify(data, null, "\t")).then(() => {
//              console.log("New note added.");
//           }
//           );
//         } catch (error) {
//           throw error;
//         }
//       }
    
//       async deleteNote(data) {
//         try {
//           await writeFileAsync(noteData, JSON.stringify(data, null, "\t")).then(() => {
//             console.log("Note deleted.");
//           }
//         );
//         } catch (error) {
//           throw error;
//         }
//       }
//     }


//     module.exports = new Store;





//     read() {
//         return readFileAsync('db/db.json', 'utf8');
//     } //reads from db.json

//     write() {
//         return writeFileAsync('db/db.json', JSON.stringify(note));
//     } //writes to db, uses json.stringify , writing notes to it, then stringify it

//     getNotes() {
//         return read().then((notes) => {
//         } parse notes concat (JSON.parse(notes))
//     }

// //     addNotes() //need to save title, text = note 
// //     const { title, text } = note;
// //         return 
// //         if (!title || !text) THROW an error title and notes cannot be blank
// //         //add the unique id to the note using our package
// //         //create a new variable to hold our new note with the new given id
// //         const userNote = { title, text, id: uuidv4() }
// //         //grab all notes and the new note and update notes to return the new note [ ...notes, userNote]

// //     deleteNotes()
// //         //use the given id to remove/delete the note
// // }






// getNotes() {
//     return this.read().then(notes => {
//         // let parsedNotes = [].concat(JSON.parse(notes));
//         let parsedNotes = JSON.parse(notes);
//         console.log(parsedNotes);
//         return parsedNotes;
//     });
// };
// addNote(newNote) {
//     //create new obj with notes param using notes.title and notes.text
//     console.log(newNote);
//     return this.getNotes().then(notes => {
//         // console.log(newNote, notes);
//         const newNoteList = [...notes, newNote]; // Creates a new array with the memebers of the array notes and adds newNote to the end
//         console.log(newNoteList);
//         // Step 1: convert to a string
//         return this.write(newNoteList);
//     })
//     //this.read().then(youll get info back)
//     //this.write with old json info and new obj from frontend
// };
// deleteNotes(title) {
//     // use the filter function
//     return this.getNotes()
//         .then(notes => {
//             console.log("This note says " + title);
//             for (var i = 0; i < notes.length; i++) {
//                 if (notes[i].title === title) {
//                     // Splice takes i position, and then deletes the 1 note.
//                     notes.splice(i, 1);
//                     console.log(notes);
//                     break;
//                 }
//             }
//             this.write(notes);
            //     fs.writeFileSync(jsonFilePath, JSON.stringify(database), function (err) {
            //         if (err) {
            //             console.log("There is an error in the writeFile if/else statement.")
            //             return console.log(err);
            //         } else {
            //             console.log("Your note was deleted!");
            //         }
            //     });
            //     res.json(database);
//         })
// }
// };



// if (req.body) {
//     const newTip = {
//       username,
//       tip,
//       topic,
//       tip_id: uuidv4(),
//     };

//     readAndAppend(newTip, './db/tips.json');
//     res.json(`Tip added successfully 🚀`);
//   } else {
//     res.error('Error in adding tip');
//   }
// });