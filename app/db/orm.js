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
function registerUser(username, password) {
    const newUser = new db.userSchema({
        username: username,
        password: password
    })

    newUser.save((err) => {
        if (!err) {
            console.log('New user registered!')
        } else {
            console.log('New user NOT registered!')
        }
    })
}

// Search db for user
async function findUser(username, password) {
    let response = ''
    await db.userSchema.findOne({ username: username }, (err, result) => {
        if (result) {
            console.log(result)
            response = 'User was found'
            if (password === result.password) {
                response = 'User logged in'
            } else {
                response = 'Password incorrect'
            }
        } else {
            response = 'User not registered!'
        }
    })
    return response
}


module.exports = {
    makeAndCheckConnection,
    registerUser,
    findUser
}