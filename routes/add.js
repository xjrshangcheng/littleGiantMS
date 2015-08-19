var express = require('express');
var router = express.Router();
var models = require('../models');
var Goods = models.goods;
var add = require('../service/add');

router.get('/', function(req, res) {
    res.render('add');
});

router.post('/', function(req, res) {
    add(req, res);
})

module.exports = router;
