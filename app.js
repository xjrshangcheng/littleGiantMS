var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

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
        var foo = req.ueditor;
        var imgname = req.ueditor.filename;
        var img_url = '/images/ueditor/' ;
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

var index = require("./routes/index");
app.use('/index', index);

var add = require('./routes/add');
app.use('/add',add);

var goods_query = require('./routes/goods_query');
app.use('/goods_query',goods_query);

var server = app.listen(8080, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
