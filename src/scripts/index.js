const $ = require('jquery');
import initSliderHomepage from './parts/slider-home';
import initPopUp from './parts/popup';

$(document).ready(() => {
  initSliderHomepage();
  initPopUp();
});