export default function initSliderMightLike() {
  const $ = require('jquery');
  require('slick-carousel');

  $('.might-like').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    useTransform: false
  });
}
