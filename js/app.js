$(function() {
    var modalIDs = $.map([1, 2, 3, 4, 5, 6], function(n, i) {
        return '#producto-0' + n + '-modal';
    });
    $.each(modalIDs, function(index, id) {
        var btnClicked = $('[data-target="'+id+'"]');
        $(id).on('show.bs.modal', function() {
            btnClicked.removeClass('btn-primary');
            btnClicked.addClass('btn-danger');
        });
        $(id).on('hidden.bs.modal', function() {
            btnClicked.removeClass('btn-danger');
            btnClicked.addClass('btn-primary');
        });
    });
});
