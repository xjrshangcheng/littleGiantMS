$(function() {
    $('#promotion-type-a').on('click', function() {
        $.ajax({
            url : 'promotionType',
            type : 'get',
            success : function() {

            }

        })
    })
})