var models = require('../models');
var Goods = models.goods;
var goodsQuery = function() {};

goodsQuery.prototype.queryGoods = function(req, res) {
    var name = req.query.name;
    var barcode = req.query.barcode;
    var priceDown = req.query.priceDown;
    var priceUp = req.query.priceUp;
    priceDown === '' ? priceDown = 0 : priceDown = parseInt(priceDown);
    priceUp === '' ? priceUp = Number.MAX_VALUE : priceUp = parseInt(priceUp);
    var queryResult = [];
    var status;
    var message;
    Goods.findAllMessage(barcode, name, priceDown, priceUp).then(function(data) {
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
    }).done(function() {
        res.send({
            status: status,
            data: queryResult,
            message: message
        });
    })
}

goodsQuery.prototype.renderGoodsQuery = function(req, res) {
    res.render('goods');
}
module.exports = goodsQuery;
