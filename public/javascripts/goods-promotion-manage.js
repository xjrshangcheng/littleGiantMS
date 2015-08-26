$(function () {
    $('.category1>input').on('click', function() {
        var checked = $(this).prop('checked');
        $('.category2 input').prop('checked', checked);
    });

    $('.category2 input').on('click', function() {
        var allChecked = $(".category2 input:checked").length === $('.category2 input').length;
        $(".category1>input").prop("checked", allChecked);
    });
})