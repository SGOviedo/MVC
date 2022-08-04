var express = require('express');
var router = express.Router();

const {main, about} = require('../controllers/mainController')


/* / */
router
    .get('/', main)
    .get('/about', about)

module.exports = router;