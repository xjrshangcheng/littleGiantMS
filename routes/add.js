var express = require('express');
var router = express.Router();
var addController = require('../controller/add-controller');
var add = new addController();

router.get('/', add.renderAddPage);

router.post('/', add.add_goods);

module.exports = router;
