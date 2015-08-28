var express = require('express');
var router = express.Router();
var models = require('../models');
var Category = models.category;

router.get('/', function(req, res) {
    var category = [];
    Category.findAll().then(function(data) {
        data.forEach(function(val) {
            category.push(val.dataValues);
        });
    }).done(function () {
        console.log(category);
        res.render('goods-promotion-manage', {
            data: category
        });
    })
});


module.exports = router;
