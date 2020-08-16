export default function initSliderItem() {
  const $ = require('jquery');
  require('slick-carousel');

  $('.slider-item-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-item-nav'
  });

  $('.slider-item-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-item-main',
    focusOnSelect: true,
    arrows: false,
    useTransform: false
  });
}

