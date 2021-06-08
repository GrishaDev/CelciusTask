const express = require('express');
const Controller = require('./controller');
const wa = require('../utils/wrapAsync');
const { isValidQuery, isValidParams } = require('./validator');

const router = express.Router();

router.get('/price/:coin', isValidQuery, isValidParams, wa(Controller.getCoinPrice));

module.exports = router;