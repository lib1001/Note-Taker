
const path = require('path');
const htmlRouter = require('express').Router();


//create route for notes.html
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//use * to send any other route hit back to home page
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = htmlRouter;