const { sign, verify } = require('jsonwebtoken');

function createToken(user) {
    const accessToken = sign({ username: user.username }, 'jwtsecretinenvfile,');

    return accessToken;
};

function validateToken(req, res, next) {
    const accessToken = req.cookies['access-token']

    if (!accessToken) return res.status(400).json({ error: 'User not Authenticated' })
    try {
        const validToken = verify(accessToken, 'jwtsecretinenvfile')
        if (validToken) {
            req.authenticated = true
            return next()
        }
    } catch (err) {
        return res.status(400).json({ error: err })
    }
}

module.exports = { createToken }