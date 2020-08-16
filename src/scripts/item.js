const $ = require('jquery');
import initSliderItem from './parts/slider-item';
import initSliderMightLike from './parts/slider-might-like';
import initPopUp from './parts/popup';

$(document).ready(() => {
  initSliderItem();
  initSliderMightLike();
  initPopUp();
});