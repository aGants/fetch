const $ = require('jquery');
import initSliderMightLike from './parts/slider-might-like';
import initRules from './parts/popup-rules';

$(document).ready(() => {
  initSliderMightLike();
  initRules();
});