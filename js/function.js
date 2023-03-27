$(document).ready(function() {

    function preloader() {
        $(()=>{
            $('body').addClass( 'nav-open' );
            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');
                $('body').removeClass( 'nav-open' );
                setTimeout( () => {
                    p.remove()
                },1000);

            },1000);
        });
    }
    preloader();

    function toggleNav() {
        $('.hamburger').click(function(event) {
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

    function scroolToSection() {
        $(".scroll_js").on("click", 'a', function (event) {
            event.preventDefault();
            let id  = $(this).attr('href');
            console.log(id);

            let top = $(id).offset().top-70;
            $('body,html').animate({scrollTop: top}, 1500);
            $('.hamburger').removeClass('hamburger_open');
            $('.header__nav').removeClass('header__nav_open');
            $( 'body' ).removeClass( 'nav-open' );
        });
    };
    scroolToSection();

    function showModal() {
        $('.show_js').on('click', function (e) {
            e.preventDefault();

            let item = $(this).closest('.apartments__item');
            let title = item.find('.apartments__header span').attr('data-title');
            let subject_title = item.find('.apartments__header span').attr('data-subject-title');


            let modal_title = $('.modal_title_js');
            let modal_subject = $('.subject_js');

            modal_title.text(title);
            modal_subject.val(subject_title);

            let id  = $(this).attr('href');
            $(id).modal('show');

            $("#aboutProject").on('hide.bs.modal', function () {
                modal_title.html('');
                modal_subject.val('');
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
    stikyMenu();

    $(function(){
        $(".tel").mask("+ 999 9 999 9999");
    });

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
        let currentSlide = (e.realIndex + 1);
        let slides = e.slides.length;
        let el = $('.swiper_label_js');

        if (slides == currentSlide) {
            el.addClass('d_right');
        } else {
            el.removeClass('d_right');
        }

        if (currentSlide > 1) {
            el.removeClass('d_left');
        } else if (currentSlide = 1) {
            el.addClass('d_left');
        }
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

    function changelanguage () {
        // localStorage.clear();
        // console.log(localStorage.getItem("language"));
        if (!localStorage.getItem("language")) {
            localStorage.setItem("language", "ru");
        }

        changeImgSrc(localStorage.getItem("language"));

        $('input[name=languageCheckbox]').change(function() {
            if ($(this).is(':checked')) {
                localStorage.setItem("language", "en");
                console.log(localStorage.getItem("language"));
                changeImgSrc(localStorage.getItem("language"));

            } else {
                localStorage.setItem("language", "ru");
                console.log(localStorage.getItem("language"));
                changeImgSrc(localStorage.getItem("language"));
            }
        });

        function changeImgSrc(language) {
            console.log('init');

            let item = $('[data-'+language+']');
            item.each(function(index, el) {
                let src = $(this).attr('data-'+language+'');
                console.log(src);
                $(this).attr('src', src);
            });
        }

        if (localStorage.getItem("language") == "en") {
            $('input[name=languageCheckbox]').prop('checked', true);
            $('input[name=languageCheckboxThanks]').prop('checked', true);
        }
    }
    changelanguage ();

})
