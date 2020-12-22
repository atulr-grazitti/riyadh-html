$(document).ready(function() {
    function iOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
  // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }
    if(iOS()) {
        $('body').addClass('iOS');
    }

    $('.selectedOption').click(function(){
        $('.optionListing').not(this).hide();
        $(this).next('.optionListing').toggle();
        $('.selectedOption').removeClass('opened');
        $(this).addClass('opened');
    });
    $('.optionListing li').click(function(){
        var reletedSecletField = $(this).closest('.dropDownFilter').find('.selectedOption');
        reletedSecletField.addClass('active');
        var selectedItem = $(this).text();
        reletedSecletField.text(selectedItem);  
        $('.optionListing').hide();
        $('.selectedOption').removeClass('opened');
    });
    $('body').click(function(evt){    
       if($(evt.target).closest('.dropDownFilter').length)
          return;             
        $('.optionListing').hide();
        $('.selectedOption').removeClass('opened');
    });

    $('html').attr('style', 'margin-top: 0px !important');
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    var headerHeight = $('header').outerHeight();
    console.log(headerHeight);
    $('.hamBurger').click(function() {
        $(this).toggleClass('active');
        $('body').toggleClass('menuOpened');
        $('.menuWrap').css('top', headerHeight);
    });
    // $('.noorRiyadh').parallax("50%", 0.05);
    // var rellax = new Rellax('.parallax');
    var controller = new ScrollMagic.Controller();

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#parallax1", triggerHook: "onLeave", duration: "150%"})
                    .setTween("#parallax1 > section", {y: "40%", ease: Linear.easeNone})
                    .addIndicators()
                    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax2", triggerHook: "0.76", duration: "80%"})
                    .setTween("#parallax2 > div", {y: "20%", ease: Linear.easeNone})
                    .addIndicators()
                    .addTo(controller);
});
var lastScrollTop = 0;
$(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    // if (windowTop == 0) {
    //     $('.banner').parallax("50%", 0.05);
    // } else {
    //     $('.banner').parallax("50%", 0.05);
    // }
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        // downscroll code
        $('header').addClass('header_hidden');
    } else {
        // upscroll code
        $('header').removeClass('header_hidden');
        if(windowTop > 0){
            $('header').addClass('notTop');
        }else {
            $('header').removeClass('notTop');
        }
    }
    lastScrollTop = st;
});

jQuery(window).on('load resize', function() {
    var windowWidth = $(window).width();
    if (windowWidth < 767) {
        if ($("#artist_slider").length > 0 && ($('html').attr('dir') == "rtl")) {
            $("#artist_slider").addClass("owl-carousel");
            $('#artist_slider').owlCarousel({
                loop: 1,
                responsiveClass: 1,
                nav: 1,
                dots: !1,
                rtl: true,
                autoHeight: true,
                center: 0,
                margin: 15,
                stagePadding: 50,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    }
                }
            });
        } else {
            $("#artist_slider").addClass("owl-carousel");
            $('#artist_slider').owlCarousel({
                loop: 1,
                responsiveClass: 1,
                nav: 1,
                dots: !1,
                autoHeight: true,
                center: 0,
                margin: 15,
                stagePadding: 50,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    }
                }
            });
        }
    } else {
        if ($('#artist_slider').length > 0) {
            $('#artist_slider').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('#artist_slider').find('.owl-stage-outer').children().unwrap();
        }
    }
    // if(windowWidth < 767){
    //     var programs_slider_item = $('#programs_slider .owl-item').width();
    //     $('#programs_slider .owl-nav').css('max-width', programs_slider_item);
    // }
    if ($('html').attr('dir') == "rtl") {
        $('#programs_slider').owlCarousel({
            loop: 1,
            responsiveClass: 1,
            nav: 1,
            dots: !1,
            autoHeight: true,
            center: 0,
            margin: 15,
            rtl: true,
            stagePadding: 50,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1199: {
                    items: 4
                }
            }
        });

        /*Artist Slider*/
        $('.artistSlider').owlCarousel({
            nav: 1,
            dots: !1,
            margin: 15,
            loop: 1,
            items: 1,
            rtl: true,
            thumbs: true,
            thumbImage: false,
            thumbsPrerendered: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item',
            navText: ['<span class="prev">＜</span>', '<span class="next">＞</span>']
        });
    } else {
        $('#programs_slider').owlCarousel({
            loop: 1,
            responsiveClass: 1,
            nav: 1,
            dots: !1,
            autoHeight: true,
            center: 0,
            margin: 15,
            stagePadding: 50,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1199: {
                    items: 4
                }
            }
        });

        /*Artist Slider*/
        $('.artistSlider').owlCarousel({
            nav: 1,
            dots: !1,
            margin: 15,
            loop: 1,
            items: 1,
            thumbs: true,
            thumbImage: false,
            thumbsPrerendered: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item',
            navText: ['<span class="prev">＜</span>', '<span class="next">＞</span>']
        });
    }
});