(function ($) {
    "use strict";

    // Script for OffCanvas Menu Activation
    $(document).ready(function () {
        $('.toggle-bar').on('click', function () {
            $('.off-canvas-menu-wrap, .off-canvas-overlay').addClass('active');
        })

        $('.cls-off-canvas-menu').on('click', function () {
            $('.off-canvas-menu-wrap, .off-canvas-overlay').removeClass('active');
        })
    })

 // Script for Slick Slider Activation
 $('.testimonail-active').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
});


    // Scroll to the desired section on click
        function scrollToSection(event) {
            event.preventDefault();
            var $section = $($(this).attr('href')); 
            $('html, body').animate({
            scrollTop: $section.offset().top
            }, 500);
        }
        $('[data-scroll]').on('click', scrollToSection);




    // Script for Slick Slider Activation
    $('.card-v-active').slick({
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping:true,
        vertical:true,
        autoplay: true
    });



    // Script for Nice Select Activation 
    $(document).ready(function () {
        $('select').niceSelect();
    })


    // Script for Magnific Popup Activation 
    $(document).ready(function () {
        $('.iframe-link').magnificPopup({ type: 'iframe' });
    });



    // Script For Scroll to top Button
    $(document).ready(function () {
        var back = $('.back-to-top');
        back.on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        })
        $(window).on('scroll', function () {
            var self = $(this),
                height = self.height(),
                top = self.scrollTop();
            if (top > height) {
                back.addClass('visible');
            } else {
                back.removeClass('visible');
            }
        })

    })




    Util.cModal('#m-open','#c-modal-one', '.cls-modal')



  
})(jQuery);	 // End line