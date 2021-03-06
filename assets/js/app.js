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
    prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_left_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_right_arrow"></i>',
  });

  //filterizr
  $('.featured_filter_container').filterizr();

  // Coutdown js
  $('.count_down').countdown('2022/01/01', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="count_down_item col-md-3"><span>%D</span><span>Days</span></div>'
      + '<div class="count_down_item col-md-3"><span>%H</span><span>Hours</span></div>'
      + '<div class="count_down_item col-md-3"><span>%M</span><span>Mins</span></div>'
      + '<div class="count_down_item col-md-3"><span>%S</span><span>Sec</span></div>'));
  });

  //latest js
  $('.latest_product_container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_left_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_right_arrow"></i>',
    autoplaySpeed: 2000,
  });

  //testimonial js
  $('.testimonial_slider_item').slick({
    speed: 500,
    slidesToShow: 2,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_left_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_right_arrow"></i>',
  });
})