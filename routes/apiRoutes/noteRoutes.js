const { createNewNote } = require('../../lib/noteFunctions');
const { notes } = require('../../db/db.json');
const router = require('express').Router();

// save note to history .json 
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

// post note 
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})



module.exports = router;