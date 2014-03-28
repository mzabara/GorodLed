    $(document).ready(function () {


        $('[data-toggle="popover"]').popover();

        $('body').on('click', function (e) {
            $('[data-toggle="popover"]').each(function () {
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                }
            });
        });

        $(".close-compare-collapse").on("click", function() {
            $('#compare-collapse').collapse('hide');
        });

        $(".close-favorite-collapse").on("click", function() {
            $('#favorite-collapse').collapse('hide');
        });

        $(".close-shopping-cart").on("click", function() {
            $('#shopping-cart-collapse').collapse('hide');
        });

//        $('#catalog-multilevel-menu, #catalog-multilevel-menu-2, #catalog-multilevel-menu-3').on('show.bs.collapse', function () {
//            $('.catalog-multilevel-menu .in').collapse('hide');
//        });  $('#catalog-multilevel-menu, #catalog-multilevel-menu-2, #catalog-multilevel-menu-3').on('show.bs.collapse', function () {
//            $('.catalog-multilevel-menu .in').collapse('hide');
//        });
    });