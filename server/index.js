require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetchInstagram = require('./fetchInstagram');

const app = express();

const PORT = 3001;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/instagram', (req, res) => {
    Promise.all(fetchInstagram()).then((imgs) => res.send(imgs));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
