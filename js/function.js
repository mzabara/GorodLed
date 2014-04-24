    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip('hide');
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

        $("#rangePrice").ionRangeSlider({
            min: 0,
            max: 5000,
            type: 'double',
            postfix: " р.",
            prettify: false,
            hasGrid: true
        });

        $("#sliderRangeMight").ionRangeSlider({
            min: 0,
            max: 30,
            type: 'double',
            postfix: " Вт/м",
            prettify: false,
            hasGrid: true
        });

        $(".scroll-container").mCustomScrollbar({
            horizontalScroll:true,
            autoDraggerLength:true,
            contentTouchScroll: true,
            scrollButtons:{
                enable:true
            },
            theme: "dark-thick"
        });

        $(".scroll-container-vertical").mCustomScrollbar({
            horizontalScroll:false,
            autoDraggerLength:true,
            contentTouchScroll: true,
            scrollButtons:{
                enable:true
            },
            theme: "dark-thick"
        });

        $("#toggleFilter").on("click", function() {
            $(".row-offcanvas").toggleClass("active");
        });

        $("#toggleFilterClose").on("click", function() {
            $(".row-offcanvas").removeClass("active");
        });
        fakewaffle.responsiveTabs(['xs', 'sm']);
    });