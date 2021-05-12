require('dotenv').config({ path: '../../.env' });
const mongoose = require('mongoose');
const db = require('./models')


// Database connection
async function makeAndCheckConnection() {
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/beopardyUsers', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // Checks connection
    await mongoose.connection.on('connected', () => {
        console.log('Mongoose is connected');
    });
}

// Adds new user to the db
function registerUser(username, hashedPassword) {
    // let response = ''

    db.userSchema.create({
        username: username,
        password: hashedPassword
    }).then((result) => {
        console.log('[The User was registered]:', result)
    }).catch((err) => {
        res.status(400).json({ error: err })
    })
}

// Search db for user
async function findUser(username, password) {
    let response = ''
    await db.userSchema.findOne({ username }, (err, result) => {
        if (result) {
            response = result
        } else {
            response = null
        }
    }).catch(err => console.log(err))
    // console.log(response)
    return response
}




module.exports = {
    makeAndCheckConnection,
    registerUser,
    findUser
}