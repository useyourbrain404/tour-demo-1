(function ($) {
  'use strict';

  var windowOn = $(window);

  // 01. PreLoader
  function hidePreloader() {
    $('#loading').fadeOut(400, function() {
      $(this).remove();
    });
  }

  windowOn.on('load', function () {
    hidePreloader();
  });

  // Safety fallback so preloader never hangs
  $(document).ready(function () {
    setTimeout(hidePreloader, 800);
  });

  // 02. Data Background
  $('[data-background]').each(function () {
    var bg = $(this).attr('data-background');
    if (bg) {
      $(this).css('background-image', 'url(' + bg + ')');
    }
  });

  $('[data-bg-color]').each(function () {
    var bg = $(this).attr('data-bg-color');
    if (bg) {
      $(this).css('background-color', bg);
    }
  });

  // 03. Sticky Header
  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 150) {
      $('#header-sticky, .tp-header-sticky, .tp-header-four').removeClass('header-sticky');
    } else {
      $('#header-sticky, .tp-header-sticky, .tp-header-four').addClass('header-sticky');
    }
  });

  // 04. Back to Top
  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 250) {
      $('.back-to-top-wrapper').removeClass('back-to-top-btn-show');
    } else {
      $('.back-to-top-wrapper').addClass('back-to-top-btn-show');
    }
  });

  $('#back_to_top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // 05. Offcanvas Menu Toggle
  $('.tp-offcanvas-open-btn, .tp-header-toogle, .mobile-menu-toggle, .tp-menu-bar, .tp-offcanvas-toogle').on('click', function (e) {
    e.preventDefault();
    $('.tp-offcanvas').addClass('opened');
    $('.tp-offcanvas-overlay').addClass('opened');
  });

  $('.tp-offcanvas-close-btn, .tp-offcanvas-overlay, .tp-close-btn').on('click', function (e) {
    e.preventDefault();
    $('.tp-offcanvas').removeClass('opened');
    $('.tp-offcanvas-overlay').removeClass('opened');
    $('.tp-filter-offcanvas-area').removeClass('offcanvas-opened');
  });

  // Offcanvas Submenu Accordion
  $('.tp-offcanvas-menu nav ul li.has-dropdown > a, .tp-main-menu-mobile nav ul li.has-dropdown > a').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('ul.tp-submenu, ul.sub-menu').slideToggle(300);
    $(this).parent('li').toggleClass('active');
  });

  // 06. Search Popup
  $('.tp-search-open-btn, .search-open-btn, .tp-header-search-btn').on('click', function (e) {
    e.preventDefault();
    $('.search__popup').addClass('search-opened');
  });

  $('.search-close-btn, .search__popup').on('click', function (e) {
    if ($(e.target).closest('.search__wrapper, .search__inner').length === 0 || $(e.target).hasClass('search-close-btn')) {
      $('.search__popup').removeClass('search-opened');
    }
  });

  // 07. Filter Offcanvas (tour listings)
  $('.tp-filter-btn').on('click', function (e) {
    e.preventDefault();
    $('.tp-filter-offcanvas-area').addClass('offcanvas-opened');
    $('.tp-offcanvas-overlay').addClass('opened');
  });

  // 08. Nice Select
  if ($.fn.niceSelect) {
    $('select').niceSelect();
  }

  // 09. Magnific Popup
  if ($.fn.magnificPopup) {
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });

    $('.popup-video, .tp-video-6-popup').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  // 10. Range Slider (Ion Range Slider)
  if ($.fn.ionRangeSlider) {
    $('.js-range-slider').ionRangeSlider({
      type: 'double',
      min: 0,
      max: 5000,
      from: 100,
      to: 2500,
      prefix: '$',
      onStart: function (data) {
        $('.filter-price-from').text('$' + data.from);
        $('.filter-price-to').text('$' + data.to);
      },
      onChange: function (data) {
        $('.filter-price-from').text('$' + data.from);
        $('.filter-price-to').text('$' + data.to);
      }
    });
  }

  // 11. Date Range Picker
  if ($.fn.daterangepicker) {
    $('input[name="daterange"], .tp-daterangepicker').daterangepicker({
      opens: 'left',
      autoUpdateInput: false,
      locale: {
        format: 'MM/DD/YYYY',
        cancelLabel: 'Clear'
      }
    });

    $('input[name="daterange"], .tp-daterangepicker').on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="daterange"], .tp-daterangepicker').on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
    });
  }

  // 12. PureCounter
  if (typeof PureCounter !== 'undefined') {
    new PureCounter({
      selector: '.purecounter',
      start: 0,
      end: 100,
      duration: 2,
      delay: 10,
      once: true,
      pulse: false,
      decimals: 0,
      legacy: true
    });
  }

  // 13. WOW Animation
  if (typeof WOW !== 'undefined') {
    new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }).init();
  }

  // 14. Quantity Increment/Decrement (cart & booking)
  $('.cart-minus, .tp-cart-minus').on('click', function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $('.cart-plus, .tp-cart-plus').on('click', function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // 15. Password show/hide toggle (login/register)
  $('.password-toggle, .tp-password-toggle').on('click', function () {
    var input = $(this).siblings('input');
    if (input.attr('type') === 'password') {
      input.attr('type', 'text');
      $(this).find('i').removeClass('fa-eye-slash').addClass('fa-eye');
    } else {
      input.attr('type', 'password');
      $(this).find('i').removeClass('fa-eye').addClass('fa-eye-slash');
    }
  });

})(jQuery);
