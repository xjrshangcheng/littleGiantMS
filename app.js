var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
    , fs = require('fs')
    , path = require('path')
    , multipart = require('connect-multiparty');

var path = require('path');
var ueditor = require("ueditor");

var serverConfig = require(__dirname + '/config/server.json');

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static("bower_components"));
app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {
    if (req.query.action === 'uploadimage') {
        var img_url = '/images/goods/' ;
        res.ue_up(img_url);
    }
    else if (req.query.action === 'listimage') {
        var dir_url = '/images/goods/';
        res.ue_list(dir_url);
    }
    else {
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/ueditor/nodejs/config.json');
    }
}));

app.post('/upload', multipart(), function(req, res){
  var filename = req.files.files.size + req.files.files.originalFilename || path.basename(req.files.files.ws.path);
  var targetPath = path.dirname(__filename) + '/public/images/goods/' + filename;
  fs.createReadStream(req.files.files.ws.path).pipe(fs.createWriteStream(targetPath));
  res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/images/goods/' + filename}});
});

var login = require('./routes/login');
app.use('/login',login);

var goodsPromotionManage = require('./routes/goods-promotion-manage');
app.use('/goods_promotion_manage',goodsPromotionManage);

var add = require('./routes/add');
app.use('/add',add);

var goods_query = require('./routes/goods');
app.use('/goods',goods_query);

var promotionType = require('./routes/promotion-type');
app.use('/promotionType',promotionType);

var server = app.listen(3001, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);

});
