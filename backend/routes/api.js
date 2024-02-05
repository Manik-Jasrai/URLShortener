const express = require('express');
const route = express();
const submitController = require('../controller/submitController');

route.post('/',submitController.handleSubmit);

module.exports = route;