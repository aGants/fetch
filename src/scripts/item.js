const $ = require('jquery');
import initSliderItem from './parts/slider-item';
import initSliderMightLike from './parts/slider-might-like';
import initRules from './parts/popup-rules';
import initSizeTable from './parts/popup-sizetable';

$(document).ready(() => {
  initSliderItem();
  initSliderMightLike();
  initRules();
  initSizeTable();
});