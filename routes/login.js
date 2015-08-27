var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
    res.render('login');
});
router.post('/',function(req,res) {
    var result;
    var status;
    var userName = req.body.inputName;
    var inputPwd = req.body.inputPwd;

    if(userName === 'admin' && inputPwd === 'admin') {
        result = 'ok';
        status = 200;
    }
    res.send({
            status: status,
            data: result,
            message: ''
        })
});

module.exports = router;
