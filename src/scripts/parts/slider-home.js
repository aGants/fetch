export default function initSliderHomepage() {
  sliderHome();
  changeHeader();
};

function sliderHome() {
  const $ = require('jquery');
  require('slick-carousel');
  $('.slider-home').slick({
    centerMode: true,
    infinite: true,
    arrows: true,
    variableWidth: true
  });
}

function changeHeader() {
  const $ = require('jquery');
  $('.slider').on('beforeChange', function (currentSlide, slick, nextSlide) {
    switch (nextSlide) {
      case 2:
        $('header').removeAttr('class');
        $('header').addClass('white');
        break;
      case 0:
        $('header').removeAttr('class');
        $('header').addClass('dark');
        break;
      case 1:
        $('header').removeAttr('class');
        $('header').addClass('dark');
        break;
    }
  });
}