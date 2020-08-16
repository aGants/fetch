const $ = require('jquery');
import initSliderHomepage from './parts/slider-home';
import initRules from './parts/popup-rules';

$(document).ready(() => {
  initSliderHomepage();
  initRules();
});