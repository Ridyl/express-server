// import files and packages up here
const express = require('express');
const data = require('./data.json');
const morgan = require('morgan');

// instantiate your express server below
const app = express();

app.use(morgan('dev'));

// add your routes and middleware below
app.get('/', (req, res) => {
    res.status(200).send('works');
});

app.get('/data', (req, res) => {
    // res.sendStatus(200);
    res.status(200).type('json').send(data);
});


// finally export the express application
module.exports = app;
