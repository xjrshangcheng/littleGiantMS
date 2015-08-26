$('#username').focus();

$(function() {
    $('#submit').on('click', function() {
        var inputName = $('#username').prop('value');
        var inputPwd = $('#password').prop('value');

        $.ajax({
            url: '/login',
            type: 'post',
            data: {
                inputName: inputName,
                inputPwd: inputPwd
            },
            success: function(result) {
                console.log(result.data);
                if (result.data === 'ok') {
                    $(location).attr('href', '/goods_query');
                }
            }
        })
    })
})
