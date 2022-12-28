(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $("[data-paroller-factor]").paroller();
    $('#overlayer').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
  });
  $(document).ready(function () {
    // Nice Select
    $('.select-bar').niceSelect();
    // counter
    $('.counter').countUp({
      'time': 1500,
      'delay': 10
    });
    // PoPuP
    $('.popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      disableOn: 300
    });
    $("body").each(function () {
      $(this).find(".img-pop").magnificPopup({
        type: "image",
        gallery: {
          enabled: true
        }
      });
    })
    //Faq
    $('.faq-wrapper .faq-title').on('click', function (e) {
      var element = $(this).parent('.faq-item');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq-content').removeClass('open');
        element.find('.faq-content').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('.faq-content').slideDown(300, "swing");
        element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
        element.siblings('.faq-item').removeClass('open');
        element.siblings('.faq-item').find('.faq-title').removeClass('open');
        element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
      }
    });
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('.submenu').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    // Scroll To Top
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    //Header Bar
    $('.header-bar').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu').toggleClass('active');
    })
    $('.overlay').on('click', function () {
      $(this).removeClass('active');
      $('.header-bar').removeClass('active');
      $('.menu').removeClass('active');
    })
    // Header Sticky Herevar prevScrollpos = window.pageYOffset;
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 1) {
      $(".header-section").addClass('active');
    }
    var header = $(".header-section");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 1) {
        header.removeClass("active");
      } else {
        header.addClass("active");
      }
    });
    $('.tab ul.tab-menu li').on('click', function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('li').siblings('li').removeClass('active');
      $(this).closest('li').addClass('active');
      tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').hide(10);
      tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').fadeIn(10);
      g.preventDefault();
    });
    //Widget Slider
    $('.testimonial-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      margin: 0,
      mouseDrag: false,
      touchDrag: true,
    });
    var owlBela = $('.testimonial-slider');
    owlBela.owlCarousel();
    // Go to the next item
    $('.testi-next').on('click', function() {
        owlBela.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.testi-prev').on('click', function() {
        owlBela.trigger('next.owl.carousel', [300]);
    })
    $('.sponsor-slider-4').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      nav: false,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:2,
          },
          480:{
              items:3,
          },
          768:{
              items:5,
          },
          992:{
              items:6,
          },
          1200:{
              items:7,
          },
      }
    })
    //Widget Slider
    $('.widget-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      margin: 30,
    });
    var owlTutu = $('.widget-slider');
    owlTutu.owlCarousel();
    // Go to the next item
    $('.widget-next').on('click', function() {
        owlTutu.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.widget-prev').on('click', function() {
        owlTutu.trigger('prev.owl.carousel', [300]);
    })
  });
})(jQuery);