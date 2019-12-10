const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const port = 3000;
const path = require('path');

app.use(express.static(__dirname + '/views'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port, () => {
    console.log('Server is running on port:', port);    
});