const { sign, verify } = require('jsonwebtoken');

function createToken(user) {
    const accessToken = sign({ username: user.username }, 'supersecrettoken');

    return accessToken;
};

function validateToken(req, res, next) {
    cosnt
    const accessToken = cookie.slice(13, cookie.length)

    if (!accessToken) return res.status(400).json({ error: 'User not Authenticated' })
    try {
        const validToken = verify(accessToken, 'supersecrettoken')
        if (validToken) {
            req.authenticated = true
            return next()
        }
    } catch (err) {
        return res.status(400).json({ error: err })
    }
}

function parsePayload(cookie) {
    let response = ''
    const newCookie = cookie.slice(13, cookie.length)

    verify(newCookie, 'supersecrettoken', (err, decoded) => {
        if (decoded) {
            // console.log('[JWT Parsed Username]:', decoded.username)
            response = decoded
        } else {
            console.log(err)
        }

    })
    return response
}

module.exports = { createToken, parsePayload }