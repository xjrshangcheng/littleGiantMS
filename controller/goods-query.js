var models = require('../models');
var Goods = models.goods;
var goodsQuery = function() {};

goodsQuery.prototype.queryGoods = function(req, res) {
    var input = req.params.input;
    var urlParameter = input.split('&');
    var name = urlParameter[0];
    var barcode = urlParameter[1];
    var priceDown = urlParameter[2];
    var priceUp = urlParameter[3];
    priceDown === '' ?  priceDown = 0 : priceDown = parseInt(urlParameter[2]);
    priceUp === '' ? priceUp = Number.MAX_VALUE : priceUp = parseInt(urlParameter[3]);
    var queryResult = [];
    var status;
    var message;
    Goods.findAllMessage(barcode, name, priceDown, priceUp).then(function (data) {
        if (data.length > 0) {
            data.forEach(function (val) {
                queryResult.push(val.dataValues);
            });
            status = 200;
            message = 'ok';
        } else {
            status = 100;
            message = 'error';
        }
    }).done(function () {
        res.send({
            status: status,
            data: queryResult,
            message: message
        });
    })
}

goodsQuery.prototype.renderGoodsQuery = function(req, res) {
    res.render('goods_query');
}
module.exports = goodsQuery;