require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const ORM = require('./db/orm');
const cookieParser = require('cookie-parser')



const PORT = 5000 || process.env.PORT

ORM.makeAndCheckConnection()









// Middleware
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use('/api', require('./router/router'));
app.use(cookieParser());




app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

// app.get('/game', (req, res) => {

// })
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))