import express from 'express';
import router from './routes.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
app.use("/",router)

app.listen(port, () => {
    console.log( `server is running at http://localhost:${port}`);
});

import mongoose from 'mongoose';
const connectionString = "mongodb://localhost:27017/HardikGupta";
console.log("database connected");

app.get('/api', (req, res) =>{
    res.send('Hello, Express!');

})

import pg from "pg";

import swagger from "swagger-ui-express";
import apiDocs from './swagger.json' assert {type:'json'};

app.use('/api-docs', swagger.serve, swagger.setup(apiDocs));
