const router = require("express").Router();
const db = require('../db/db.json');
const fs = require ('fs');

router.get('/', (req, res)=> {
    console.log('GET REQUEST');
    res.json(db);
});

router.post('/', (req, res)=> {
    console.log('req.body',req.body);
    const { title, text } = req.body;
    newNote = { title, text, id: db.length + 1 };
    console.log("newnote",newNote)
    console.log('db',db)
    db.push(newNote);
    const newDb = JSON.stringify(db);
    fs.writeFile('./db/db.json', newDb, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    res.json(newDb);
});


//bonus - be able to delete a note
module.exports = router;