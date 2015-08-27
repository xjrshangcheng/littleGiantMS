var express = require('express');
var router = express.Router();
var models = require('../models');
//var Goods = models.goods;
//var goodsQuery = require('../controller/goods-query');
//var goodsQuery = new goodsQuery();
//router.get('/', goodsQuery.renderGoodsQuery);
//
//router.get('/:input', goodsQuery.queryGoods);
router.get('/',function(req, res) {
    res.render('promotion-type');
})

module.exports = router;
