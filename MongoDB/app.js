const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('dotenv/config');

// Middleware
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/post', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
    });

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('Connected to database!')
    );

app.listen(3000);