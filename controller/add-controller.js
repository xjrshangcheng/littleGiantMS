var models = require('../models');
var Goods = models.goods;
var addController = function() {}

addController.prototype.add_goods = function(req, res) {
    var headers;

    Goods.find({
        where : {
            barcode : req.body.id
        }
    }).then(function(data) {
        if(data === null) {
            headers = {
                status: "200",
                data: "",
                message: "add succees"
            };
            return Goods.create ({
                name : req.body.name,
                info : req.body.info,
                price : req.body.price,
                standard_one : req.body.standards,
                sales : req.body.number,
                detail : req.body.detail,
                more_img : req.body.imgs,
                remark : req.body.remark,
                barcode : req.body.id
            })
        } else {
            headers = {
                status: "400",
                data: "",
                message: "请确认商品是否存在在数据库中，若是相同产品，请查询进行修改，若是没有，请更改id再进行添加"
            };
        }
    }).then(function() {
        res.send(headers)
    })
}

addController.prototype.renderAddPage = function(req, res) {
    res.render('add');
}
module.exports = addController;