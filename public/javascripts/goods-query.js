$(function() {
    $('#goods-id').on("blur", function() {
        if ($(this)[0].value.length > 13) {
            executeJudge('#goods-id', '请输入13位以内有效数字');
        }
        if (isNaN($(this)[0].value) === true) {
            executeJudge('#goods-id', '请输入合法数字');
        }
    });

    function inputValidation(evt){
        var ASCIININE = 57;
        var ASCIIZERO = 48;
        var ASCIIBACKSPACE = 8;
        var ASCIIPIONT = 46;
        var ASCIITAB = 9;
        var ASCIIPRECENT = 37;
        var ASCIIUPPIONT = 39;

        if (!(evt.keyCode <= ASCIININE && evt.keyCode >= ASCIIZERO || evt.keyCode === ASCIIBACKSPACE || evt.keyCode === ASCIIPIONT || evt.keyCode === ASCIITAB || evt.keyCode === ASCIIPRECENT || evt.keyCode === ASCIIUPPIONT) || evt.shiftKey) {
            evt.preventDefault();
        }
    }

    function executeJudge(selector, tipText) {
        $(selector).popover({
            title: "管理员",
            content: tipText
        });
        $(selector).popover('show');
        window.setTimeout(function() {
            $(selector).popover('destroy')
        }, 2000);
    }

    $('#goods-query').on('click', function(e) {
        var barcode = $('#goods-id').prop('value');
        var name = $('#goods-name').prop('value');
        var priceDown = $('#goods-price-down').prop('value');
        var priceUp = $('#goods-price-up').prop('value');
        var data = {
            barcode: barcode,
            name: name,
            priceDown: priceDown,
            priceUp: priceUp
        };
        $.ajax({
            url: "goods/query",
            data: data,
            type: 'get',
            success: function(result) {
                if (result.message === 'ok') {
                    $('.query-result').empty();
                    result.data.forEach(function(item) {
                        $('<tr><td>' + item.name + '</td><td>' + item.price + '</td><td>' + item.sales + '</td><td>' + item.inventory + '</td><td>' + item.type + '</td><td>' + item.status + '</td><td><a class="btn btn-default" id="itemDel" href="#" role="button">删除</a><a class="btn btn-default" id="itemModify" href="#" role="button">修改</a></td></tr>').appendTo($('.query-result'));
                    })
                } else {
                    $('.query-result').empty();
                    $('<tr><td colspan="7">' + '查无此商品' + '</td></tr>').appendTo($('.query-result'));
                }
            }
        })
    });

    $("#goods-price-down").on("keydown", function(evt) {
        inputValidation(evt);
    });

    $("#goods-price-up").on("keydown", function(evt) {
        inputValidation(evt);
    });
})
