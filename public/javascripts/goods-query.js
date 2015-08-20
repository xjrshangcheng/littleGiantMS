$(function() {
    $("#goods-id").on("blur", function() {
        if($(this)[0].value.length > 20) {
            executeJudge('#goods-id','请输入20位以内有效数字');
        }
        if(isNaN($(this)[0].value) === true) {
            executeJudge('#goods-id','请输入合法数字');
        }
    });

    function executeJudge(selector,tipText) {
        $(selector).popover({title: "皇上", content: tipText});
        $(selector).popover('show');
        window.setTimeout(function() { $(selector).popover('destroy') }, 2000);
        // return false;
    }

})
