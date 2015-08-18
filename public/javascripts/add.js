$("#goods-confirm").on("click",function() {
    var editContent = UE.getEditor('editor').getContent();
    var content = detail(editContent);
    var goodsName = $("#goods-name").prop("value");



    var goodsInfo = $("#goods-simple-info").prop("value");
    var goodsStandards = $("#goods-standards").prop("value");
    var goodsRemark = $("#goods-remark").prop("value");
    var goodsUnit = $("#goods-market-unit").prop("value");
    var price = $("#price").prop("value");
    var number = $("#number").prop("value");
    var id = $("#code").prop("value");

    $.post("/add",{
        name : goodsName,
        info : goodsInfo,
        standards : goodsStandards,
        remark : goodsRemark,
        unit : goodsUnit,
        price : price,
        number : number,
        id : id,
        detail : content
    }, function(data) {
        console.log(data);
        if(data.status === "200") {
            alert("商品添加成功");
        } else if(data.status === "400") {
            alert(data.message);
        } else {}
    });
})

$("#goods-name").blur(function(){

});

var detail = function(editContent) {
    var Splitstring = editContent.split('src="');
    var addString = 'src="http://localhost:8080';
    var joinString = '';
    Splitstring.forEach(function(val,i) {
        if (val.indexOf("/images") !== -1) {
            joinString += (addString + val);
        } else {
            joinString += val;
        }
    })
    return joinString;
}
