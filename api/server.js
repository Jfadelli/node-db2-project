const express = require('express');

const carsRouter = require('../cars/cars-router.js');
// const welcomeToTheApi = require('../welcome-router.js')

const server = express();

server.use(express.json());

// server.use('/', welcomeRouter)
server.use('/api/cars', carsRouter);

module.exports = server;