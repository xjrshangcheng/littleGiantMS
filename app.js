var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static("bower_components"));

// var index = require("./router/index");
// app.get('/', index);

var add = require('./routes/add');
app.use('/add',add);

var goods_query = require('./routes/goods_query');
app.use('/goods_query',goods_query);

var server = app.listen(8080, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
