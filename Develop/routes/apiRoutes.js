const router = require("express").Router();

router.get('/', (req, res)=> {
    res.json(`GOT YOUR ${req.method} REQUEST`)
});

router.post('/', (req, res)=> {
    res.json(`GOT YOUR ${req.method} REQUEST`)
});


//bonus - be able to delete a note
module.exports = router;