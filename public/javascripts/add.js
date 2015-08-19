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

    if (judgeContent(goodsName, goodsUnit, price, number, id)) {
        $.post("/add", {
            name: goodsName,
            info: goodsInfo,
            standards: goodsStandards,
            remark: goodsRemark,
            unit: goodsUnit,
            price: price,
            number: number,
            id: id,
            detail: content
        }, function(data) {
            console.log(data);
            if (data.status === "200") {
                alert("商品添加成功");
            } else if (data.status === "400") {
                alert(data.message);
            } else {}
        });
    } else {}
})

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

var judgeContent = function(goodsName,goodsUnit,price,number,id) {
    if(goodsName === '') {
        executeJudge("#goods-name");
    } else if (goodsUnit === ''){
        executeJudge("#goods-market-unit");
    }  else if (price === ''){
        executeJudge("#price");
    }  else if (number === ''){
        executeJudge("#number");
    }  else if (id === ''){
        executeJudge("#code");
    } else {
        return true;
    }
}

var executeJudge = function(selector) {
    $(selector).focus();
    $(selector).popover('show');
    window.setTimeout(function() { $(selector).popover('destroy') }, 2100);
    return false;
}

$("#price, #code, #number").on("keydown", function() {
    $(this)[0].value = $(this)[0].value.replace(/[^\d.]/g,"");
    $(this)[0].value = $(this)[0].value.replace(/^\./g,"");
    $(this)[0].value = $(this)[0].value.replace(/\.{2,}/g,".");
    $(this)[0].value = $(this)[0].value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
});

$("#price").blur(function() {
    if(!isNaN($("#price")[0].value) === false) {
        $("#price")[0].value = $("#price")[0].value.substring(0,$("#price")[0].value.length - 1);
    }
});

$("#code").blur(function() {
    if(!isNaN($("#code")[0].value) === false) {
        $("#code")[0].value = $("#code")[0].value.substring(0,$("#code")[0].value.length - 1);
    }
});

$("#number").blur(function() {
    if(!isNaN($("#number")[0].value) === false) {
        $("#number")[0].value = $("#number")[0].value.substring(0,$("#number")[0].value.length - 1);
    }
});
