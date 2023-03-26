$(document).ready(function() {

    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },1000);

            },1000);
        });
    }
    // preloader();
    // setTimeout( ()=> preloader(),15000 )

    // function toggleCallback() {
    //     $('.callback__toggle').click(function(event) {
    //         $(this).removeClass('active');
    //         $('.callback__content').addClass('active');
    //     });
    //     $(document).mouseup(function (e) {
    //         let div = $(".callback");
    //         if (!div.is(e.target) && div.has(e.target).length === 0) {
    //             $('.callback__content').removeClass('active');
    //             $('.callback__toggle').addClass('active');
    //         }
    //     });
    //     $('.callback__close').on('click', function (e) {
    //         e.preventDefault();
    //         $('.callback__content').removeClass('active');
    //         $('.callback__toggle').addClass('active');
    //     });
    // };
    // toggleCallback();


    function toggleNav() {
        $('.hamburger').click(function(event) {
            // console.log('Показ меню');
            $('.hamburger').toggleClass('hamburger_open');
            $('.header__nav').toggleClass('header__nav_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    toggleNav();


    function hideNav() {
        $(".header__nav").on('mouseenter', function() {
            // console.log('mouse on');
        });

        $(".header__nav").on('mouseleave', function() {
            $('.hamburger').removeClass('hamburger_open');
            $('.header__nav').removeClass('header__nav_open');
            $( 'body' ).removeClass( 'nav-open' );
        });
    }
    hideNav();

    function showModal() {
        $('.show_js').on('click', function (e) {
            e.preventDefault();
            let id  = $(this).attr('href');
            $(id).modal('show');

            let item = $(this);
            let src = item.find('img').attr('data-src');
            let title = item.find('.apartments__title span').attr('data-title');
            let m2 = item.find('.m2_js').attr('data-m2');
            let ft = item.find('.ft_js').attr('data-ft');
            let aed = item.find('.aed_js').attr('data-aed');
            let dollar = item.find('.dollar_js').attr('data-dollar');
            console.log(src);


            let modal_src_js = $('.modal_src_js');
            let modal_title_js = $('.modal_title_js');
            let modal_m2_js = $('.modal_m2_js');
            let modal_ft_js = $('.modal_ft_js');
            let modal_aed_js = $('.modal_aed_js');
            let modal_dollar_js = $('.modal_dollar_js');

            modal_src_js.attr("src", src);
            modal_title_js.text(title);
            modal_m2_js.text(m2);
            modal_ft_js.text(ft);
            modal_aed_js.text(aed);
            modal_dollar_js.text(dollar);


            $("#thisApartment").on('hide.bs.modal', function () {
                modal_src_js.attr("src", '');
                modal_title_js.html('');
                modal_m2_js.html('');
                modal_ft_js.html('');
                modal_aed_js.html('');
                modal_dollar_js.html('');
            });

        });
    }
    showModal();

    $('.modal').on('show.bs.modal', () => {
        let openedModal = $('.modal.in:not(.popapCalc)');
        if (openedModal.length > 0) {
            openedModal.modal('hide');
        }
    });

    $('.select').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        dropdownPosition: 'below'
    });

    // function addDataFancybox() {
    //     let item = $('.itemForDataFancybox_js');
    //     let num = 0;
    //
    //     item.each(function(index, el) {
    //         $(this).find('a').attr('data-fancybox', num);
    //         num++;
    //     });
    // }
    // addDataFancybox();

    function stikyMenu() {
        let HeaderTop = $( 'header' ).offset().top + $( '.header' ).innerHeight();
        let currentTop = $( window ).scrollTop();
        setNavbarPosition();

        $( window ).scroll( function () {
            setNavbarPosition();
        } );

        function setNavbarPosition() {
            currentTop = $( window ).scrollTop();

            if ( currentTop > HeaderTop ) {
                $( 'header' ).addClass( 'stiky' );
            } else {
                $( 'header' ).removeClass( 'stiky' );
            }
        }
    }
    // stikyMenu();

    // start animate numbers
    // function onVisible( selector, callback, repeat = false ) {
    //
    // let options = {
    //     threshold: [ 0.5 ]
    // };
    // let observer = new IntersectionObserver( onEntry, options );
    // let elements = document.querySelectorAll( selector );
    //
    // for ( let elm of elements ) {
    //     observer.observe( elm );
    // }
    //
    // function onEntry( entry ) {
    //     entry.forEach( change => {
    //         let elem = change.target;
    //         // console.log(change);
    //         // console.log(elem.innerHTML);
    //         if ( change.isIntersecting ) {
    //             if ( !elem.classList.contains( 'show' ) || repeat ) {
    //                 elem.classList.add( 'show' );
    //                 callback( elem );
    //             }
    //         }
    //     } );
    // }
    // }
    //
    // onVisible( '.percent__number span', function ( e ) {
    //     animateNumber( e, e.innerHTML );
    // } );
    //
    // function animateNumber( elem, final, duration = 2000 ) {
    //     let start = 0;
    //     // console.log('init');
    //     setInterval( function () {
    //         if ( final >= start ) {
    //             elem.innerHTML = start++;
    //         }
    //     }, duration / final );
    // }
    // end animate numbers

    $(function(){
        $(".tel").mask("+ 999 9 999 9999");
    });


    // function changeSlide() {
    //     let el = $('.slide__img');
    //
    //     $( ".slide_js" ).slider({
    //         range: "min",
    //         value: 1000,
    //         min: 0,
    //         max: 5000,
    //         step: 1,
    //         slide: function( event, ui ) {
    //             console.log(ui.value/100);
    //             el.css({
    //                 transform: `translateX(-${ui.value/100}%)`
    //             })
    //
    //         }
    //     });
    //
    // };
    // changeSlide();



    function scroolToSection() {
        $(".menu__link,.scroll_js").on("click", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href');
            let top = $(id).offset().top-70;
            $('body,html').animate({scrollTop: top}, 1500);
            $('.hamburger').removeClass('hamburger_open');
            $('.header__nav').removeClass('header__nav_open');
            $( 'body' ).removeClass( 'nav-open' );
        });
    };
    // scroolToSection();

    // https://github.com/michalsnik/aos
    AOS.init({
        disable: 'mobile',
        anchorPlacement: 'bottom-bottom',
        duration: 800, // values from 0 to 3000, with step 50ms
        // offset: 20,
        // once: true,
    });

    AOS.init({
        disable: function () {
            var maxWidth = 1200;
            return window.innerWidth < maxWidth;
        }
    });


    function addSliders() {
        let apartments = $('.apartments_swiper_js');
        apartments.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent();
            let swiperDefaults = {
                speed: 500,
                // centeredSlides: true,
                loop : true,
                // autoplay: {
                //     delay: 5000,
                // },
                // freeMode: true,
                // watchSlidesProgress: true,
                // mousewheel: {
                //     // invert: false,
                //     forceToAxis: true,
                // },
                slidesPerView: 3,
                // spaceBetween: 10,
                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },
                breakpoints: {
                    501: {
                        // slidesPerView: 6,
                        // spaceBetween: 20,
                    },

                }
            };
            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);
            // console.log($parent);
            // console.log($parent.find('.projects__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    addSliders();

    const experts = new Swiper('.experts_swiper_js', {
        speed: 500,
        centeredSlides: true,
        // loop: true,
        // autoplay: {
        //     delay: 5000,
        // },

        // freeMode: true,
        // watchSlidesProgress: true,
        //
        // mousewheel: {
        //     forceToAxis: true,
        // },


        slidesPerView: 3,
        spaceBetween: 15,

        breakpoints: {
            501: {
                slidesPerView: 3,
                spaceBetween: 195,
                navigation: {
                    nextEl: '.icon_arrow_right_lg',
                    prevEl: '.icon_arrow_left_lg',
                },

            },

        }
    });

    experts.on('slideChange', function (e) {
    let currentSlide = e.realIndex;

    console.log(currentSlide);
    // console.log(e);
    console.log(e.slides.length);
    // let currentItem = $('.advantage__menu').find(`[data-index='${currentSlide}']`);
    // $('.advantage__item').removeClass('active');
    // currentItem.addClass('active');
});

    function digits_int(target){
        val = $(target).val().replace(/[^0-9]/g, '');
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        $(target).val(val);
    }

    $(function($){
        $('body').on('input', '.ranks_js', function(e){
            digits_int(this);
        });
        digits_int('.ranks_js');
    });

    $('[data-fancybox]').fancybox({
        loop: true,
        autoFocus: false,
        arrows: true,
        toolbar: true,
        buttons: [
           // "zoom",
           //"share",
           // "slideShow",
           //"fullScreen",
           //"download",
           // "thumbs",
           "close"
        ],
    });

    // console.log($('[data-fancybox]'));

})
