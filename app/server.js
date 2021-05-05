require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const db = require('./db/models')

const PORT = 5000 || process.env.PORT

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/beopardyUsers', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

const newUser = new db.userSchema({
    username: 'Adam',
    password: 'password'
})

newUser.save((error) => {
    if (error) {
        console.log('DB save did not go through')
    } else {
        console.log('DB save successful')
    }
});

console.log(process.env.MONGO_URI)

// Middleware
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

// app.get('/game', (req, res) => {

// })
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))