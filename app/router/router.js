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

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    ORM.findUser(username, password)
        .then(result => {
            console.log(result)
            res.send(result)
        })
        .catch(err => console.log(err))
    ORM.registerUser(username, password)
})

module.exports = router