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
    prevArrow: '<i class="fas fa-chevron-left arrow left"></i>',
    nextArrow: '<i class="fas fa-chevron-right arrow right"></i>',
  });

  //filterizr
  $('.featured_filter_container').filterizr();

  // Coutdown js
  $('.count_down').countdown('2021/12/12', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="col-3"><div class="count_down_item"><div class= "coun"><h2><span>%d</span></h2><span>Days</span></div></div></div>'
      + '<div class="col-3"><div class="count_down_item"><div class= "coun"><h2><span>%H</span></h2><span>Hours</span></div></div></div>'
      + '<div class="col-3"><div class="count_down_item"><div class= "coun"><h2><span>%M</span></h2><span>Mins</span></div></div></div>'
      + '<div class="col-3"><div class="count_down_item"><div class= "coun"><h2><span>%S</span></h2><span>Sec</span></div></div></div>'));
  });

  //latest js
  $('.latest_product_container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left arrow left"></i>',
    nextArrow: '<i class="fas fa-chevron-right arrow right"></i>',
    autoplaySpeed: 2000,
  });
})