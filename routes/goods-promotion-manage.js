var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('goods-promotion-manage');
});


module.exports = router;
