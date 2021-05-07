const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
})

module.exports = router