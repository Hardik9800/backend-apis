<<<<<<< HEAD
import express from 'express';
import router from './routes.js';
=======
const express = require('express');
>>>>>>> master
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
<<<<<<< HEAD
app.use("/",router)
=======

>>>>>>> master
app.listen(port, () => {
    console.log( 'server is running at http://localhost:${port}');
});

<<<<<<< HEAD
import mongoose from 'mongoose';
=======
const mongoose = require('mongoose');
>>>>>>> master
const connectionString = "mongodb://localhost:27017/HardikGupta";
console.log("database connected");

app.get('/api', (req, res) =>{
    res.send('Hello, Express!');

})

<<<<<<< HEAD
import pg from "pg";

import swagger from "swagger-ui-express";
import apiDocs from './swagger.json' assert {type:'json'};

app.use('/api-docs', swagger.serve, swagger.setup(apiDocs));
=======
const pg =require("pg");
>>>>>>> master
