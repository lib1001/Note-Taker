const router = require("express").Router();
const store = require("../db/store");

router.get('/notes', (req, res) => {
      store.getNotes()
      .then((notes) => res.json(notes))
  })
  
  //post route to add the notes
  router.post('/notes', (req, res) => {
      store.addNote(req.body)
      .then((note) => (res.json(note)))
  })
  
  //delete route to delete notes
  
  router.delete("/:title", (req, res) => {
      store.deleteNotes(req.params.title)
      res.json(notes)
  })

module.exports = router;