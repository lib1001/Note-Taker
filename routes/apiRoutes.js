const router = require("express").Router();
const notes = require('../db/db.json');
const fs = require('fs');

// 1. get route to get all notes from DB
router.get('/notes', (req, res) => {
    res.json(notes);
    // res.json returns as a json obj coming from the db file
})

// 2. post route to add the notes
router.post('/notes', (req, res) => {
    req.body.id = Math.floor(Math.random() * 10000);
    notes.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if (err) {
            throw err;
        }
    });
    res.json(notes);
})

// 3. delete route to delete my notes
router.delete('/notes/:id', (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (req.params.id == notes[i].id) {
            notes.splice(i, 1)
        }
    }
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if (err) {
            throw err;
        }
    });
    res.json(notes);
})

// export my module
module.exports = router;