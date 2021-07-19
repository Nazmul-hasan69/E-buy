$(function(){
  'use strict';

  $(".banner_slider_container").slick({
    Infinity:true,
    fade: true,
    speed:700,
    CssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrow: true,
    prevArrow: '<i class="fas fa-chevron-left banner_arrow left"></i>',
    nextArrow: '<i class="fas fa-chevron-right banner_arrow right"></i>',
  });
  $('.featured_filter_container').filterizr();
})