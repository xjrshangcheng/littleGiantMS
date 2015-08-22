var express = require('express');
var router = express.Router();
var models = require('../models');
var Goods = models.goods;

router.get('/', function(req, res) {
  res.render('goods_query');
});

router.get('/query/:inputBarcode', function(req, res) {
    // var inputBarcode = req.query.inputBarcode;
    var inputBarcode = req.params.inputBarcode;
    var queryResult = [];
    Goods.findAll({
        where : {
            barcode : inputBarcode
        }
    }).then(function(data) {
        if(data.length > 0) {
            data.forEach(function(val) {
                queryResult.push(val.dataValues);
            });

        }else {
            res.send({
                status : 200,
                data : 'error',
                message : ''
        })}
    })
    .done(function() {
        // res.send({
        //     status: 200,
        //     queryResult: queryResult
        // })
        res.render('goods_query',{
            queryResult : queryResult
        })
    })
})

module.exports = router;
