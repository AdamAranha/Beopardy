const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000 || process.env.PORT
app.use(express.static(path.join(__dirname, '../tempPublic')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../tempPublic', 'index.html'));
})
app.listen(PORT, () => console.log('Listening on http://localhost:3000'))