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
                if (result.data === 'ok') {
                    $(location).attr('href', '/goods_query');
                }
            }
        })
    })
});


$('html').bind('keydown',function(e){
      if(e.keyCode === 13){
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
                      $(location).attr('href', '/goods_query');
                  }
              }
          })
      }
 });
