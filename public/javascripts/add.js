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
    var imgs = getImages();

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
            detail: content,
            imgs: imgs
        }, function(data) {
            if (data.status === "200") {
                $("#goods-confirm").popover({title: "亲~~", content: "添加商品成功"});
                $("#goods-confirm").popover('show');
                window.setTimeout(function() { $("#goods-confirm").popover('destroy') }, 2000);
            } else if (data.status === "400") {
                $("#code").focus();
                $("#code").popover({title: "亲~~", content: "商品编码重复，请确认之后再次添加"});
                $("#code").popover('show');
                window.setTimeout(function() { $("#code").popover('destroy') }, 2000);
            }
        });
    }
})

var getImages = function() {
    var imgs = ["#imgShowOne","#imgShowTwo","#imgShowThree","#imgShowFour"];
    var images = "";

    for(var i = 0; i < imgs.length; i ++) {
        if($(imgs[i])[0].src !== "" && $(imgs[i])[0].src !== "http://localhost:3001/images/img.jpg") {
            images += $(imgs[i])[0].src;
            images += " ";
        }
    }

    if($("#imgShowFive")[0].src !== "" && $("#imgShowFive")[0].src !== "http://localhost:3001/images/img.jpg") {
        images += $("#imgShowFive")[0].src;
    }
    return judgeImg(images);
}

var judgeImg = function(imgs) {
    if(imgs !== "" && imgs[imgs.length-1] !== " ") {
        return imgs;
    } else if(imgs !== "") {
        return imgs.substring(0, imgs.length - 1);
    }
}

var detail = function(editContent) {
    var Splitstring = editContent.split('src="');
    var addString = 'src="http://localhost:3001';
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
    }  else if (id === '' || id === '00' || id === '0' || id === '000'){
        $("#code").focus();
        $("#code").popover({title: "亲~~", content: "商品编码不能为空或以0开头"});
        $("#code").popover('show');
        window.setTimeout(function() { $("#code").popover('destroy') }, 2000);
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

$("#price, #code, #number").on("keyup", function() {
    $(this)[0].value = $(this)[0].value.replace(/[^\d.]/g,"");
    $(this)[0].value = $(this)[0].value.replace(/^\./g,"");
    $(this)[0].value = $(this)[0].value.replace(/\.{2,}/g,".");
    $(this)[0].value = $(this)[0].value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
});

$("#uploadFileOne, #uploadFileTwo, #uploadFileThree, #uploadFileFour, #uploadFileFive").on('click',function() {
    var uploadId = this.id;

    if(uploadId === "uploadFileOne" && typeof($("#one-picture :input")[0].files[0]) !== "undefined") {
        execute("#frmUploadFileOne","#imgShowOne");
    }
    if(uploadId === "uploadFileTwo" && typeof($("#two-picture :input")[0].files[0]) !== "undefined") {
        execute("#frmUploadFileTwo","#imgShowTwo");
    }
    if(uploadId === "uploadFileThree" && typeof($("#three-picture :input")[0].files[0]) !== "undefined") {
        execute("#frmUploadFileThree","#imgShowThree");
    }
    if(uploadId === "uploadFileFour" && typeof($("#four-picture :input")[0].files[0]) !== "undefined") {
        execute("#frmUploadFileFour","#imgShowFour");
    }
    if(uploadId === "uploadFileFive" && typeof($("#five-picture :input")[0].files[0]) !== "undefined") {
        execute("#frmUploadFileFive","#imgShowFive");
    }
})

function execute(one,two,three) {
    var formData = new FormData($(one)[0]);

    $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            if (200 === data.code) {
                $(two).attr('src', data.msg.url);
            }
        },
        error: function() {
            alert("error")
        }
    });
}

$("#photo-delete-one, #photo-delete-two, #photo-delete-three, #photo-delete-four, #photo-delete-five").on('click',function() {
    var uploadId = this.id;

    if(uploadId === "photo-delete-one") {
        deletePicture("#imgShowOne","#one-picture");
    }
    if(uploadId === "photo-delete-two") {
        deletePicture("#imgShowTwo","#two-picture");
    }
    if(uploadId === "photo-delete-three") {
        deletePicture("#imgShowThree","#three-picture");
    }

    if(uploadId === "photo-delete-four") {
        deletePicture("#imgShowFour","#four-picture");
    }
    if(uploadId === "photo-delete-five") {
        deletePicture("#imgShowFive","#five-picture");
    }
})

function deletePicture(imgId,inputId) {
    $(imgId).prop("src", "/images/img.jpg");
    $(inputId).html('<input type="file" name="files" class="upload-picture"/>');
}