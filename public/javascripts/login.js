$('#username').focus();

$(function() {
    $('#submit').on('click', function() {
        check();
    })
});

$('html').bind('keydown',function(event){
    if(event.keyCode === 13){
        check();
    }
 });

function check() {
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
            if (result.data === 'ok') {
                $(location).attr('href', '/goods');
            }
        }
    })
}
