//require router and store

const router = require("./htmlRoutes");

//get route to get all notes from DB

router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes) => res.json(notes))
    //can add .catch if i want
})





//post route to add the notes
router.post('/notes', (req, res) => {
    store.addNote(req.body)
    .then((note) => (res.json(note)))
})

//delete route to delete notes


module.exports = 