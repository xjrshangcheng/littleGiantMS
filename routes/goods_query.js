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
    var status;
    var message;
    Goods.findAll({
            where: {
                barcode: {
                    $like: inputBarcode + '%'
                }
            }
        }).then(function(data) {
            if (data.length > 0) {
                data.forEach(function(val) {
                    queryResult.push(val.dataValues);
                });
                status = 200;
                message = 'ok';
            } else {
                status = 100;
                message = 'error';
            }
        })
        .done(function() {
            res.send({
                    status: status,
                    data: queryResult,
                    message: message
                })
                //res.render('goods_query',{
                //    queryResult : queryResult
                //})
        })
})

module.exports = router;
