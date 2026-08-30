(function ($) {
  'use strict';

  $(document).ready(function () {
    // 01. Testimonial Slider (index.html)
    if ($('.tp-testimonial-slide').length > 0) {
      new Swiper('.tp-testimonial-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.tp-testimonial-pagination',
          clickable: true,
        },
      });
    }

    // 02. Destination Two Slider (index-2.html)
    if ($('.tp-destination-two-slider').length > 0) {
      new Swiper('.tp-destination-two-slider', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: '.tp-testimonial-two-prev',
          nextEl: '.tp-testimonial-two-next',
        },
        breakpoints: {
          '1200': { slidesPerView: 4 },
          '992': { slidesPerView: 3 },
          '768': { slidesPerView: 2 },
          '576': { slidesPerView: 1 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 03. Testimonial Two Slider (index-2.html, index-3.html)
    if ($('.tp-testimonial-two-slider').length > 0) {
      new Swiper('.tp-testimonial-two-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: '.tp-testimonial-two-prev',
          nextEl: '.tp-testimonial-two-next',
        },
        breakpoints: {
          '992': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 04. Brands Slider
    if ($('.tp-brands-slider').length > 0) {
      new Swiper('.tp-brands-slider', {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          '1200': { slidesPerView: 6 },
          '992': { slidesPerView: 4 },
          '768': { slidesPerView: 3 },
          '576': { slidesPerView: 2 },
          '0': { slidesPerView: 2 },
        },
      });
    }

    // 05. Destination 3 Slider (index-3.html)
    if ($('.tp-destination-3-slider').length > 0) {
      new Swiper('.tp-destination-3-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        breakpoints: {
          '1200': { slidesPerView: 3 },
          '768': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 06. Destination 7 Slider (index-4.html)
    if ($('.tp-destination-7-slider').length > 0) {
      new Swiper('.tp-destination-7-slider', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.tp-destination-5-pagination',
          clickable: true,
        },
        breakpoints: {
          '1200': { slidesPerView: 4 },
          '992': { slidesPerView: 3 },
          '768': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 07. Feature Slider (index-4.html)
    if ($('.tp-feature-slider').length > 0) {
      new Swiper('.tp-feature-slider', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        pagination: {
          el: '.tp-feature-pagination',
          clickable: true,
        },
        breakpoints: {
          '1200': { slidesPerView: 3 },
          '768': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 08. Testimonial 4 Slide (index-4.html)
    if ($('.tp-testimonial-4-slide').length > 0) {
      new Swiper('.tp-testimonial-4-slide', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        breakpoints: {
          '1200': { slidesPerView: 3 },
          '768': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 09. Destination 8 Slider (index-7.html)
    if ($('.tp-destination-8-slider').length > 0) {
      new Swiper('.tp-destination-8-slider', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        pagination: {
          el: '.tp-destination-5-pagination',
          clickable: true,
        },
        breakpoints: {
          '1200': { slidesPerView: 3 },
          '768': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 10. Testimonial 7 Slider (index-7.html)
    if ($('.tp-testimonial-7-slider').length > 0) {
      new Swiper('.tp-testimonial-7-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: '.tp-testimonial-two-prev',
          nextEl: '.tp-testimonial-two-next',
        },
      });
    }

    // 11. Category City Slider (city-details-2.html)
    if ($('.tp-category-city-slider-active').length > 0) {
      new Swiper('.tp-category-city-slider-active', {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        navigation: {
          prevEl: '.tp-category-city-prev',
          nextEl: '.tp-category-city-next',
        },
        breakpoints: {
          '1200': { slidesPerView: 4 },
          '992': { slidesPerView: 3 },
          '768': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 12. Tour City Slider 3 (city-details-3.html)
    if ($('.tp-tour-city-slider-3-active').length > 0) {
      new Swiper('.tp-tour-city-slider-3-active', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        navigation: {
          prevEl: '.tp-tour-city-slider-3-prev',
          nextEl: '.tp-tour-city-slider-3-next',
        },
        breakpoints: {
          '1200': { slidesPerView: 3 },
          '768': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }

    // 13. Instagram Slider (city-details-4.html)
    if ($('.tp-instagram-slide').length > 0) {
      new Swiper('.tp-instagram-slide', {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          '1200': { slidesPerView: 6 },
          '992': { slidesPerView: 4 },
          '768': { slidesPerView: 3 },
          '576': { slidesPerView: 2 },
          '0': { slidesPerView: 1 },
        },
      });
    }
  });
})(jQuery);
