const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000 || process.env.PORT
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

// app.get('/game', (req, res) => {

// })
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))