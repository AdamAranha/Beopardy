const express = require('express');
const router = express.Router();
const ORM = require('../db/orm');
const bcrypt = require('bcrypt');


const { createToken, validateToken, parsePayload } = require('../JWT/JWT');



router.post('/login', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    const { username, password, } = req.body
    // parsePayload(req.headers.cookie)
    // Queries DB for username
    ORM.findUser(username, password)
        .then(response => {
            if (response) {
                // If document exists, compares passwords
                bcrypt.compare(password, response.password)
                    .then((match) => {
                        if (!match) {
                            console.log('Incorrect password')
                            res.status(400).json({ error: 'Passwords do not match' })
                        } else {
                            // If passwords match, then creates a token
                            console.log(`[${response.username}] was logged in`)
                            const accessToken = createToken(response)

                            res.cookie('access-token', accessToken, {
                                // 3 hours
                                maxAge: 1000 * 60 * 60 * 3,
                                httpOnly: true
                            })
                            res.json({ message: 'You are logged in' })
                        }
                    }).catch((err) => {
                        console.log('err at password match', err)
                        res.status(400).json({ error: err })
                    })
            } else {
                console.log('Unable to find user')
                res.status(400).json('Unable to find user')
            }
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
})

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // Searches DB to see if the username is in use
    ORM.findUser(username)
        .then((response) => {
            if (!response) {
                // If it is a new username, password is hashed and account is created
                bcrypt.hash(password, 10)
                    .then((hash) => {
                        ORM.registerUser(username, hash)
                    }).catch((err) => {
                        res.status(400).json({ error: err })
                    })
            } else {
                console.log('Unable to new register User')
                res.json('Unable to new register User')
            }
        }).catch((err) => {
            res.status(400).json({ error: err })
        })
})

router.get('/checkauth', (req, res) => {
    if (req.headers.cookie) {
        res.json(parsePayload(req.headers.cookie))
    }
})

module.exports = router