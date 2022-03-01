const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.get('/post', (req, res) => {
    res.send('Hello Post!');
    });

// Connect to database


app.listen(3000);