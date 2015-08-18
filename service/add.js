var models = require('../models');
var Goods = models.goods;

var add = function(req, res) {
    console.log(req.body.id);
    console.log(req.body);
    Goods.findAll({
        where : {
            id : req.body.id
        }
    }).then(function(data) {
        if(data[0] === undefined) {
            Goods.create ({
                id : req.body.id,
                name : req.body.name,
                info : req.body.info,
                price : req.body.price,
                standard_one : req.body.standards,
                sales : req.body.number,
                detail : req.body.detail,
                remark : req.body.remark
            }).then(function() {
                res.send({
                    status : "200",
                    data : "",
                    message : "add succees"
                })
            })
        } else {
            res.send({
                status : "400",
                data : "",
                message : "请确认商品是否存在在数据库中，若是相同产品，请查询进行修改，若是没有，请更改id再进行添加"
            })
        }
    })
}

module.exports = add;
