const express = require('express');
const router = express.Router();
const ORM = require('../db/orm');
const bcrypt = require('bcrypt');


const { createToken, validateToken } = require('../JWT/JWT');

router.post('/login', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    const { username, password, } = req.body

    ORM.findUser(username, password)
        .then(response => {
            if (response) {
                bcrypt.compare(password, response.password)
                    .then((match) => {
                        if (!match) {
                            console.log('Incorrect password')
                            res.status(400).json({ error: 'Passwords do not match' })
                        } else {
                            console.log(`[${response.username}] was logged in`)

                            const accessToken = createToken(response)

                            res.cookie('access-token', accessToken, {
                                // 30 Days in milliseconds
                                maxAge: 60 * 60 * 24 * 30 * 1000,
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

    ORM.findUser(username)
        .then((response) => {
            if (!response) {
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

module.exports = router