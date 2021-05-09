const express = require('express');
const router = express.Router();
const ORM = require('../db/orm');

router.get('/login', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    const { username, password } = req.headers
    console.log('[Body is]', `username:${username},password:${password}`)

    ORM.findUser(username, password)
        .then(result => {
            console.log(result)
            res.send(result)
        })
        .catch(err => console.log(err))
})

module.exports = router