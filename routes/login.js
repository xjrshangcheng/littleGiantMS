var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
    res.render('login');
});


module.exports = router;
