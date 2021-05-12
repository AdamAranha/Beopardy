const { sign, verify } = require('jsonwebtoken');

function createToken(user) {
    const accessToken = sign({ username: user.username }, 'secret');

    return accessToken;
};

// function validateToken(req, res, next) {
//     const accessToken = req.headers.cookie['access-token']

//     if (!accessToken) return res.status(400).json({ error: 'User not Authenticated' })
//     try {
//         const validToken = verify(accessToken, 'secret')
//         if (validToken) {
//             req.authenticated = true
//             return next()
//         }
//     } catch (err) {
//         return res.status(400).json({ error: err })
//     }
// }

function parsePayload(cookie) {
    // console.log('[Cookie]:', cookie)
    // console.log(typeof cookie)

    const newCookie = cookie.slice(13, cookie.length)
    // console.log(newCookie)


    verify(newCookie, 'secret', (err, decoded) => {
        if (decoded) {
            console.log('[JWT Parsed Username]:', decoded.username)
        } else {
            console.log(err)
        }

    })
}

module.exports = { createToken, parsePayload }