const $ = require('jquery');
import initSliderItem from './parts/slider-item';
import initPopUp from './parts/popup';

$(document).ready(() => {
  initSliderItem();
  initPopUp();
});