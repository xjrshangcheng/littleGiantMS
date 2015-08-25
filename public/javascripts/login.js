$('#username').focus();

$(function() {
    $('#submit').on('click', function() {
        if($('#username').prop('value') === 'admin' & $('#password').prop('value')=== 'admin' ) {
            javascript:window.open('http://localhost:3001/goods_query');
        }
    })
});
