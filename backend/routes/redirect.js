const express = require('express');
const route = express();

const { handleRedirect } = require('../controller/redirectController');
route.get('/:shortURL',handleRedirect)

module.exports = route;