"use strict";

const routes = require('./routes/apiroutes');
const app = require('express');

app.use('/api', routes);

