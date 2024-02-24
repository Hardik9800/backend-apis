const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(port, () => {
    console.log( 'server is running at http://localhost:${port}');
});

const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/HardikGupta";
console.log("database connected");


