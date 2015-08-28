var express = require('express');
var router = express.Router();
var models = require('../models');
var Promotion = models.promotion;

router.get('/',function(req, res) {
    Promotion.findPromotion().then(function(data) {
        return data.map(function(val) {
            return val.dataValues;
        })
    })
    .then(function(data) {
        console.log(data);
        res.render('promotion-type',{
            data : data
        })
    })
})

module.exports = router;
