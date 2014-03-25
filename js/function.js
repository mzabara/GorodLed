(function (cash) {
    $(document).ready(function () {
        $('#catalog-multilevel-menu, #catalog-multilevel-menu-2, #catalog-multilevel-menu-3').on('show.bs.collapse', function () {
            $('.catalog-multilevel-menu .in, .collapse .in').collapse('hide');
        });
    });
}(jQuery));