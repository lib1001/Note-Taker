const router = require("express").Router();
const store = require("../db/store");

router.get('/notes', (req, res) => {
      store.getNotes()
      .then((notes) => res.json(notes));
  })

router.post('/notes', (req, res) => {
      store.addNote(req.body);
      res.json(req.body);
  })

// uncomment once finished in store

// router.delete("/notes/:title", (req, res) => {
//   store.deleteNote(req.params.title);
//   res.json();

// });

module.exports = router;