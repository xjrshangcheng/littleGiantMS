$(function() {
    $('#goods-id').on("blur", function() {
        if ($(this)[0].value.length > 13) {
            executeJudge('#goods-id', '请输入13位以内有效数字');
        }
        if (isNaN($(this)[0].value) === true) {
            executeJudge('#goods-id', '请输入合法数字');
        }
    });

    function executeJudge(selector, tipText) {
        $(selector).popover({
            title: "皇上",
            content: tipText
        });
        $(selector).popover('show');
        window.setTimeout(function() {
            $(selector).popover('destroy')
        }, 2000);
    }

    $('#goods-query').on('click', function(e) {
        var inputBarcode = $('#goods-id').prop('value');
        $.ajax({
            url: 'goods_query/query/' + inputBarcode,
            type: 'get',
            // data: {
            //     inputBarcode: inputBarcode
            // },
            success: function(result) {
                if (result.message === 'ok') {
                    result.data.forEach(function(item) {
                        $('<tr><td>' + item.name + '</td><td>' + item.price + '</td><td>' + item.sales + '</td><td>' + item.inventory + '</td><td>' + item.type + '</td><td>' + item.status + '</td><td><a class="btn btn-default" id="itemDel" href="#" role="button">删除</a><a class="btn btn-default" id="itemModify" href="#" role="button">修改</a></td></tr>').appendTo($('.query-result'));
                    })
                }
            }
        })
    });

})
