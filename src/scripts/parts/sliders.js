export default function initSliders() {
  const $ = require('jquery');
  require('slick-carousel');

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true
  });
};
