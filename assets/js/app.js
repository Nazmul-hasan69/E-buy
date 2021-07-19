$(function(){
  'use strict';

  $(".banner_slider_container").slick({
    Infinity:true,
    fade: true,
    speed:700,
    CssEase: 'linear',
    //autoplay: true,
    //autoplaySpeed: 2000,
    arrow: true,
    prevArrow: '<i class="slider_arrow slider_arrow_left fas fa-chevron-left"></i>',
    nextArrow: '<i class="slider_arrow slider_arrow_right fas fa-chevron-right"></i>',
  });
  $('.featured_filter_container').filterizr();
})