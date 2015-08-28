$(function() {
    $('.category1 input').on('click', function() {
        var checked = $(this).prop('checked');
        var id = $(this).data('id');
        $('div[data-id=' + id + '] input').prop('checked', checked);
    })
    $('.category1 input').on('click', function() {
        var parentId = $(this).parent().data('id');
        var checked = $('div[data-id=' + parentId + '] input:checked').length === $('div[data-id=' + parentId + '] input').length;
        $('input[data-id=' + parentId + ']').prop('checked', checked);
        parentId = $('input[data-id=' + parentId + ']').parent().data('id');
        checked = $('div[data-id=' + parentId + '] input:checked').length === $('div[data-id=' + parentId + '] input').length;
        $('input[data-id=' + parentId + ']').prop('checked', checked);
        parentId = $('input[data-id=' + parentId + ']').parent().data('id');
        checked = $('div[data-id=' + parentId + '] input:checked').length === $('div[data-id=' + parentId + '] input').length;
        $('input[data-id=' + parentId + ']').prop('checked', checked);
    })
});

$(function () {
    $('.category3 .category4').addClass('category')
    $('.category3').addClass('category')
    $('.category1 a').on('click', function () {
        var t = $(this).data('t');
        t *= -1;
        $(this).data('t', t);
        var id = $(this).data('id');
        if (t===-1) {
            $('div[data-id=' + id + ']').addClass('category')
        } else {
            $('div[data-id=' + id + ']').removeClass('category')
        }
    })
});