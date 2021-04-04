'use strict';
const express = require('express');


// require('dotenv').config();



const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const app = express();

app.use(express.json());




function homeHandler(req, res) {
    res.send('Hello World');
}

app.get('/', homeHandler);


app.use('*', notFoundHndler);
app.use(errorHandler);

module.exports =
{
    server: app,
    start: (port) => {
        const PORT = port || 8080;
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    },
};